"use client";

import StudyMaterialFilter from "./StudyMaterialFilter";

import React, { useState } from "react";

import { dateFormat } from "@/utils/dateTimeUtils";

import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { EmptyList } from "@/components/ui/EmptyList";
import Card from "@/components/ui/card/Card";
import CardContent from "@/components/ui/card/CardContent";
import { Icons } from "@/components/Icon";

const ManageStudyMaterial = ({ studentEnrollCourses, studentId }) => {
  const [studyMaterialState, setStudyMaterialState] = useState({
    items: [],
    isLoading: false,
    hasSearched: false,
    error: null,
  });

  const [loadingVideos, setLoadingVideos] = useState({});

  const handleVideoLoad = (videoId) => {
    setLoadingVideos((prev) => ({
      ...prev,
      [videoId]: false,
    }));
  };

  const handleSearch = async (filters) => {
    try {
      setStudyMaterialState((prev) => ({
        ...prev,
        items: studentEnrollCourses,
        isLoading: true,
        error: null,
      }));
    } catch (error) {
      setStudyMaterialState((prev) => ({
        ...prev,
        error:
          error instanceof Error
            ? error
            : new Error("An error occurred while searching"),
        isLoading: false,
        hasSearched: true,
      }));
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto mb-10">
        <StudyMaterialFilter
          studentEnrollCourses={studentEnrollCourses}
          studentId={studentId}
          onSearch={handleSearch}
        />
      </div>

      {studyMaterialState.hasSearched &&
      studyMaterialState.items.length === 0 ? (
        <EmptyList description="No study material found according to recent filter" />
      ) : studyMaterialState.items.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {studyMaterialState?.items?.map((material) => (
            <Card
              key={material.xsl}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                {/* Thumbnail container with aspect ratio */}
                <div className="relative pt-[56.25%] bg-gray-100">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-t-lg"
                    src={material.xemburl}
                    title={material.xlessonname}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts"
                    onLoad={() => handleVideoLoad(material.xsl)}
                  />

                  {/* Loading state */}
                  {loadingVideos[material.xsl] && <LoadingSpinner />}
                </div>

                {/* Content section */}
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors duration-300">
                    {material.xlessonname}
                  </h3>

                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Icons.calendar className="w-4 h-4 mr-1" />
                      <span>
                        {material.xdate && dateFormat(material.xdate)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ManageStudyMaterial;
