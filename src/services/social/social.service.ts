import apiClient from "@/utils/api.clients";
import { SocialType, SocialTypeDTO } from "./social";

export const GetAllSocial = async (): Promise<SocialType | any> => {
  try {
    const data = await apiClient.get("/social");
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const GetSocialById = async (id: string): Promise<SocialType | any> => {
  try {
    const data = await apiClient.get(`/social/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const CreatSocial = async (newData: SocialTypeDTO) => {
  try {
    const data = await apiClient.post("/social", newData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de l'envoi des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const UpdateSocialData = async (
  id: string,
  updatedData: SocialTypeDTO
) => {
  try {
    const data = await apiClient.patch(`/social/${id}`, updatedData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la mise à jour des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const DeleteSocialData = async (id: string) => {
  try {
    const data = await apiClient.delete(`/social/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la suppression des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};
