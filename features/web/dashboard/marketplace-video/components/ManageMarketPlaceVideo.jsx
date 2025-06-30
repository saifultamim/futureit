"use client";

import React, { useState } from "react";
import MarketPlaceVideoFilter from "./MarketPlaceVideoFilter";
import { EmptyList } from "@/components/ui/EmptyList";
import Card from "@/components/ui/card/Card";
import CardContent from "@/components/ui/card/CardContent";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Icons } from "@/components/Icon";
import { dateFormat } from "@/utils/dateTimeUtils";


const ManageMarketPlaceVideo = ({
  studentEnrollCourses,
  studentId,
}) => {
  const [marketPlaceVideoState, setMarketPlaceVideoState] =
    useState({
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
      setMarketPlaceVideoState((prev) => ({
        ...prev,
        items: studentEnrollCourses ,
        isLoading: true,
        error: null,
      }));

      // const results: MarketplaceVideoItem[] = await searchMarketPlaceVideo(
      //   filters
      // );

      // Initialize loading state for new videos
      // const newLoadingStates = results.reduce(
      //   (acc: { [key: string]: boolean }, item) => ({
      //     ...acc,
      //     [item.xsl as number]: true,
      //   }),
      //   {}
      // );

      // setLoadingVideos(newLoadingStates);

      // setMarketPlaceVideoState((prev) => ({
      //   ...prev,
      //   items: results,
      //   isLoading: false,
      //   hasSearched: true,
      // }));
    } catch (error) {
      setMarketPlaceVideoState((prev) => ({
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
        <MarketPlaceVideoFilter
          studentEnrollCourses={studentEnrollCourses}
          studentId={studentId}
          onSearch={handleSearch}
        />
      </div>

      {marketPlaceVideoState.hasSearched &&
      marketPlaceVideoState.items.length === 0 ? (
        <EmptyList description="No market place video found according to recent filter" />
      ) : marketPlaceVideoState.items.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {marketPlaceVideoState?.items?.map((video) => (
            <Card
              key={video.xsl}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                {/* Thumbnail container with aspect ratio */}
                <div className="relative pt-[56.25%] bg-gray-100">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-t-lg"
                    src={video.xyoutube_embed_link}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts"
                    onLoad={() => handleVideoLoad(video.xsl)}
                  />

                  {/* Loading state */}
                  {loadingVideos[video.xsl] && <LoadingSpinner />}
                </div>

                {/* Content section */}
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Icons.calendar className="w-4 h-4 mr-1" />
                      <span>{video.xdate && dateFormat(video.xdate)}</span>
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

export default ManageMarketPlaceVideo;
