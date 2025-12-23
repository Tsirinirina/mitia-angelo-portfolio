import { TechnoList } from "@/utils/techno.list";

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  startDate: string;
  publishDate: string;
  technoList: TechnoList[];
  technoElements: TechnoList[];
  logoUri: string;
  clientInformation: string;
  imagesLinks: string[];
  link: string;
  version: string;
  status: string;
  private: boolean;
  type: ProjectType;
  priority: Priority;
  createdAt: string;
}

export enum ProjectType {
  WEBDEV = "Web Dev",
  MOBILEDEV = "Mobile Dev",
  UIUX = "UI/UX",
}

export enum Priority {
  HIGH = "HIGHT",
  NORMAL = "NORMAL",
}

export interface ProjectDTO {
  title?: string;
  shortTitle?: string;
  description?: string;
  startDate?: string;
  publishDate?: string;
  technoList?: TechnoList[];
  technoElements?: TechnoList[];
  logoUri?: string;
  clientInformation?: string;
  imagesLinks?: string[];
  link?: string;
  version?: string;
  status?: string;
  private?: boolean;
  type?: ProjectType;
  priority?: Priority;
}
