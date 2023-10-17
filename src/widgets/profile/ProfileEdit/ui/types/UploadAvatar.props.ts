export interface UploadAvatarProps {
  avatar?: string;
  isLoadingAvatar: boolean;

  onChangeInputFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
