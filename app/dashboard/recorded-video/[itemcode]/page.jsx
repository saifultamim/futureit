


const FailureMessage = ({ message='this is failure message', onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
      role="alert"
    >
      <strong className="font-bold">Exam Failed: </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

const VideoProgress = ({ prevWatchPercent, watchPercent }) => (
  <div className="flex items-center justify-between border-b p-2 bg-white rounded mb-2">
    <span className="block text-sm font-medium text-gray-700">
      Watched: {parseInt(prevWatchPercent)}%
    </span>
    <div className="flex-1 flex justify-end items-center gap-3">
      <div
        className={`w-1/4 bg-gray-200 rounded-full h-2 ${
          watchPercent > 0 ? "" : "hidden"
        }`}
      >
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${parseInt(watchPercent)}%` }}
        ></div>
      </div>
      <span className={`ftext-sm ${watchPercent > 0 ? "" : "hidden"}`}>
        {parseInt(watchPercent)}%
      </span>
    </div>
  </div>
);

const NavigationButton = ({
  direction,
  onClick,
  disabled,
  textVisible = false,
  additionalClass = "",
}) => (
  <button
    className={`flex gap-2 items-center bg-black hover:bg-gray-600 text-white font-bold ${additionalClass} ${
      textVisible ? "py-2 px-4 rounded" : "p-1.5 rounded-full"
    }  text-sm mt-4 ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    onClick={onClick}
    disabled={disabled}
  >
    {direction === "previous" && <FiArrowLeft className="text-green-400" />}
    {textVisible && (
      <span>{direction === "previous" ? "Previous" : "Next"}</span>
    )}
    {direction === "next" && <FiArrowRight className="text-green-400" />}
  </button>
);

const RecordedVideos = ({ studentId, studentLearningContents, errorData }) => {
  const [state, updateState, updateContentData] = useContentState(
    studentLearningContents
  );
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Find the last content that has xprev_watch_time
    const lastSeenContentIndex = studentLearningContents.findLastIndex(
      (content) =>
        content.xprev_watch_time &&
        parseFloat(content.xprev_watch_time) > 0 &&
        content.prev_passed_quiz == 1
    );

    if (lastSeenContentIndex !== -1) {
      const lastSeenContent = studentLearningContents[lastSeenContentIndex];
      updateState({
        currentContentIndex: lastSeenContentIndex,
        openAccordionIndex: lastSeenContentIndex,
        selectedContent: lastSeenContent,
        selectedVideo: lastSeenContent?.lesson?.xvideolink,
        isClassAttended: lastSeenContent?.is_attend_class,
        prevWatchPercent: lastSeenContent?.xprev_watch_time || 0,
      });

      if (lastSeenContent?.lesson?.xvideolink) {
        handleContentSelect(lastSeenContentIndex, CONTENT_TYPE.VIDEO);
      }
    }
  }, [studentLearningContents]);

  const handleWatchPercentUpdate = (newWatchPercent) => {
    updateState({ watchPercent: newWatchPercent });
  };

  const handleNavigationClick = async (direction) => {
    try {
      updateState({ loading: true });

      const currentItem = state.contents[state.currentContentIndex];
      const currentItemHasQuiz = currentItem?.lesson?.quizzes?.length > 0;
      const currentItemHasVideo = !!currentItem?.lesson?.xvideolink;

      const newIndex =
        direction === "next"
          ? Math.min(state.currentContentIndex + 1, state.contents.length - 1)
          : Math.max(state.currentContentIndex - 1, 0);
      const newItem = state.contents[newIndex];
      const newItemHasQuiz = newItem?.lesson?.quizzes?.length > 0;

      if (direction === "next") {
        if (
          currentItemHasQuiz &&
          state.selectedContenttype === CONTENT_TYPE.VIDEO
        ) {
          const quizData = {
            xlesson: currentItem?.xlesson,
            xquiz_type: currentItem?.lesson?.quizzes?.[0]?.xquiz_type,
            xset: currentItem?.lesson?.quizzes?.[0]?.xset,
          };
          await handleContentSelect(
            state.currentContentIndex,
            CONTENT_TYPE.QUIZ,
            quizData
          );
        } else {
          await handleContentSelect(newIndex, CONTENT_TYPE.VIDEO);
        }
      } else if (direction === "previous") {
        if (newItemHasQuiz && state.selectedContenttype !== CONTENT_TYPE.QUIZ) {
          const quizData = {
            xlesson: newItem?.xlesson,
            xquiz_type: newItem?.lesson?.quizzes?.[0]?.xquiz_type,
            xset: newItem?.lesson?.quizzes?.[0]?.xset,
          };
          const indexToSelect =
            currentItemHasVideo &&
            state.selectedContenttype === CONTENT_TYPE.QUIZ
              ? state.currentContentIndex
              : newIndex;
          const contentTypeToSelect =
            currentItemHasVideo &&
            state.selectedContenttype === CONTENT_TYPE.QUIZ
              ? CONTENT_TYPE.VIDEO
              : CONTENT_TYPE.QUIZ;
          await handleContentSelect(
            indexToSelect,
            contentTypeToSelect,
            quizData
          );
        } else {
          await handleContentSelect(newIndex, CONTENT_TYPE.VIDEO);
        }
      }

      await updatedData();
      updateState({ watchPercent: 0 });
    } catch (error) {
      console.error("Error updating watch time:", error.message);
    }
  };

  const handleContentSelect = useCallback(
    async (index, contentType, resource = null) => {
      updateState({ loading: true });

      const item = state.contents[index];
      if (!item) return;

      const newState = {
        watchPercent: 0,
        currentContentIndex: index,
        openAccordionIndex: index,
        selectedVideo: null,
        selectedContent: item,
        prevWatchPercent: item?.xwatch_time,
        isClassAttended: item?.is_attend_class,
        selectedVideo: item?.lesson?.xvideolink,
        selectedContenttype: contentType,
        selectedResource:
          contentType === CONTENT_TYPE.RESOURCE ? resource : null,
      };

      if (contentType === CONTENT_TYPE.QUIZ) {
        await handleQuizSelection(item, resource, newState);
      }

      updateState({ ...newState, loading: false });
    },
    [state.contents, updateState]
  );

  const handleCompletionOfCondition = useCallback(
    async (updateData, isPassed = null) => {
      const isQuizSubmission = isPassed !== null;
      const isClassAttendance = updateData?.is_attend_class ? true : false;

      if (isClassAttendance) {
        window.location.reload();
      }
      if (isQuizSubmission) {
        const nextIndex = Math.min(
          state.currentContentIndex + 1,
          state.contents.length - 1
        );

        if (isPassed) {
          setTimeout(() => {
            window.location.reload();
          }, 8000);
        } else {
          await handleContentSelect(
            state.currentContentIndex,
            CONTENT_TYPE.VIDEO
          );
          updateState({
            failureMessage:
              "You failed this exam. Please continue the lesson again.",
          });
        }
      }
    },
    [
      updateState,
      updateContentData,
      state.currentContentIndex,
      state.contents.length,
      state.watchPercent,
      state.selectedContent,
      handleContentSelect,
    ]
  );

  const updatedData = async () => {
    const currentContent = studentLearningContents[state.currentContentIndex];
    try {
      updateState({ loading: true });
      const response = await updateVideoWatchTime(
        currentContent,
        state.watchPercent,
        studentId
      );

      if (response.status === 201 || response.status === 200) {
        const responseData = response.data;
        const updatedContentData = {
          xwatch_time: responseData?.xwatch_time,
          xprev_watch_time: responseData?.xprev_watch_time,
          has_passed_quiz: responseData?.has_passed_quiz,
        };

        updateState({ loading: false });
        updateContentData(state.currentContentIndex, updatedContentData);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error("Error updating watch time:", error.message);
    } finally {
      updateState({ loading: false });
    }
  };

  const handleQuizSelection = async (item, resource, newState) => {
    const itemcode = resource?.xitemcode;
    const lesson = resource?.xlesson;
    const quizSl = resource?.xsl;
    const quizType = resource?.xquiz_type;
    const quizSet = resource?.xset;

    try {
      const response = await getAttendedExamDetails(
        itemcode,
        lesson,
        studentId
      );
      const numberOfAttemptQuizSingleLesson = response?.length;

      if (quizType === QUIZ_TYPE.FINAL && resource?.quiz_results?.length > 0) {
        const quizResult = await getQuizResult(
          itemcode,
          quizSl,
          quizSet,
          studentId
        );
        newState.quizResult = quizResult;
        newState.isQuizPassed = true;
      } else {
        newState.isQuizPassed = false;
        newState.quizResult = [];
        const passedQuizDetail = response?.find((data) => data.xstatus);

        if (passedQuizDetail && passedQuizDetail != undefined) {
          const quizResult = await getQuizResult(
            itemcode,
            passedQuizDetail.xquizsl,
            passedQuizDetail.xset,
            studentId
          );
          newState.isQuizPassed = true;
          newState.quizResult = quizResult;
        } else {
          const quizContent = await getNewQuizDetailWithQuestion(
            itemcode,
            lesson,
            quizSl,
            quizType,
            response.map((set) => set.xset)
          );

          newState.selectedQuiz = {
            quizContent: quizContent?.data?.[0],
            lessonSerial: item.xserial,
            numberOfAttemptQuizSingleLesson: numberOfAttemptQuizSingleLesson,
          };
        }
      }
    } catch (error) {
      console.error("error in quiz select", error.message);
    }
  };

  const dismissFailureMessage = useCallback(() => {
    updateState({ failureMessage: null });
  }, [updateState]);

  const renderContent = useMemo(() => {
    if (state.loading)
      return (
        <div className="h-52">
          <Loader />
        </div>
      );

    if (!state.isClassAttended) {
      return (
        <ClassAttendCheckContent
          selectedVideoId={state.selectedContent?.xsl}
          onClassAttended={handleCompletionOfCondition}
        />
      );
    }

    if (
      isContentLocked(
        state.selectedContent,
        state.currentContentIndex,
        state.selectedContenttype
      ).isLocked
    ) {
      const { message } = isContentLocked(
        state.selectedContent,
        state.currentContentIndex,
        state.selectedContenttype
      );
      return <LockedContent message={message} />;
    }

    switch (state.selectedContenttype) {
      case CONTENT_TYPE.VIDEO:
        return (
          <>
            {state.failureMessage && (
              <FailureMessage
                message={state.failureMessage}
                onDismiss={dismissFailureMessage}
              />
            )}

            <VideoProgress
              prevWatchPercent={state.prevWatchPercent}
              watchPercent={state.watchPercent}
            />
            <VideoContent
              videoLink={state.selectedVideo}
              onWatchPercentUpdate={handleWatchPercentUpdate}
            />
          </>
        );
      case CONTENT_TYPE.RESOURCE:
        return <ResourceContent fileName={state.selectedResource} />;
      case CONTENT_TYPE.QUIZ:
        if (state.isQuizPassed)
          return <QuizResult quizResult={state.quizResult} />;
        if (state.selectedQuiz)
          return (
            <QuizzContent
              quiz={state.selectedQuiz}
              isLastFreeVideoQuiz={state.selectedContent?.isLastFreeVideo}
              onQuizComplete={handleCompletionOfCondition}
            />
          );
        return null;
      default:
        return null;
    }
  }, [
    state,
    handleWatchPercentUpdate,
    handleCompletionOfCondition,
    dismissFailureMessage,
  ]);

  if (errorData) {
    return <div className="error-message">{errorData.message}</div>;
  }

  return (
    <>
      <Link
        href="/stuportal/recorded-video"
        className="inline-flex items-center justify-start gap-3 font-bold border mb-6 bg-white p-2 rounded"
      >
        <FiArrowLeft className="text-green-700" />
        <span>Back</span>
      </Link>

      {/* Breadcrumb */}
      <Breadcrumb
        courseName={state.selectedContent?.seitem?.xdesc}
        lessonName={state.selectedContent?.lesson?.xdesc}
      />

      <div className="flex flex-wrap gap-4 mb-8 w-full">
        {/* Content show area */}
        <div className="flex-1">
          <div
            className="h-content relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {renderContent}
            <div
              className={`flex justify-between transition-opacity duration-200 ${
                isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <NavigationButton
                direction="previous"
                onClick={() => handleNavigationClick("previous")}
                disabled={
                  state.currentContentIndex === 0 &&
                  state.selectedContenttype === CONTENT_TYPE.VIDEO
                }
                additionalClass="absolute top-2/4 left-0"
              />
              <NavigationButton
                direction="next"
                onClick={() => handleNavigationClick("next")}
                disabled={
                  state.currentContentIndex === state.contents.length - 1
                }
                additionalClass="absolute top-2/4 right-0"
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <NavigationButton
              direction="previous"
              onClick={() => handleNavigationClick("previous")}
              disabled={
                state.currentContentIndex === 0 &&
                state.selectedContenttype === CONTENT_TYPE.VIDEO
              }
              textVisible={true}
            />
            <NavigationButton
              direction="next"
              onClick={() => handleNavigationClick("next")}
              disabled={state.currentContentIndex === state.contents.length - 1}
              textVisible={true}
            />
          </div>
        </div>

        {/* Course syllabus */}
        <div className="bg-white rounded-md border shadow-sm overflow-y-auto max-h-[800px] w-96">
          <div className="border-b text-center p-3 flex justify-between">
            <p className="font-semibold">Course Syllabus</p>
          </div>
          {state.contents?.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              openIndex={state.openAccordionIndex}
              toggleAccordion={(index) =>
                updateState({ openAccordionIndex: index })
              }
              selectedContenttype={state.selectedContenttype}
              handleContentSelect={handleContentSelect}
            />
          ))}
        </div>
      </div>
    </>
  );
};


    

export default RecordedVideos;
