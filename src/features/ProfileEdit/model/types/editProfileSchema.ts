export interface EditProfileSchema {
  firstName: string;
  lastName: string;
  avatar: string;
  isLoadingAvatar: boolean;
  isLoadingProfileData: boolean;
  error?: string;
}

export interface EditProfileDataProps {
  firstName: string;
  lastName: string;
  avatar: string;
  userId: string;
}
