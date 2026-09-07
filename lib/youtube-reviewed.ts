export type ReviewedYoutubeVideo = {
  id: string
  page: string
  videoId: string
  url: string
  title: string
  creator?: string
  purpose: string
  reviewedAt: string
  sourceNote?: string
}

/**
 * Manually reviewed YouTube embeds only.
 * Leave empty until an owner reviews a specific video ID — do not invent IDs.
 * Empty list → YouTubeLite renders nothing.
 */
export const REVIEWED_YOUTUBE_VIDEOS: ReviewedYoutubeVideo[] = []

export function videosForPage(page: string): ReviewedYoutubeVideo[] {
  return REVIEWED_YOUTUBE_VIDEOS.filter((v) => v.page === page)
}
