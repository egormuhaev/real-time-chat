import { LoadFriendsData } from "../LoadFriendsData/LoadFriendsData";
import { LoadProfileData } from "../LoadProfileData/LoadProfileData";

interface LoadDataProps {
  children?: React.ReactNode;
}

export const LoadData: React.FC<LoadDataProps> = ({ children }) => {
  return (
    <LoadProfileData>
      <LoadFriendsData>{children}</LoadFriendsData>
    </LoadProfileData>
  );
};
