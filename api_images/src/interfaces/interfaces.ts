export interface IResults {
  alt_description: string;
  blur_hash: string;
  breadcrumbs: { slug: string; title: string; index: number; type: string }[];
  color: string;
  created_at: string;
  current_user_collections: string[];
  description: null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: { self: string; html: string; download: string; download_location: string };
  promoted_at: string;
  slug: string;
  sponsorship: null;
  tags: { type: string; title: string };
  topic_submissions: { id?: string };
  updated_at: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  user: { id: string; updated_at: string; username: string; name: string; first_name: string };
  width: number;
}

export interface IAPIrequest {
  results: IResults[];
  total: number;
  total_pages: number;
}
