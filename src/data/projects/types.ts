export type Deliverable = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  isVideo?: boolean;
  videoType?: 'iframe' | 'mp4' | 'webm';
};

export type ProjectStep = { id: string; text: string };
