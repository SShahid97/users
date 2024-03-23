import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { CardActions, Divider, IconButton, Tooltip, Zoom } from "@mui/material";
import {
  Call,
  FavoriteBorder,
  MailOutline,
  Place,
  Visibility,
} from "@mui/icons-material";
import CardContentBox from "./CardContentBox";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  addUserToFavorites,
  removeUserFromFavorites,
} from "../../slices/userSlice";
import { User } from "../../types";
import { isUserAddedToFavorites } from "../../../../utils/helpers";
import { useSnackbar } from "notistack";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  // store function
  const dispatch = useAppDispatch();
  const { favoriteUsers } = useAppSelector((state) => state.reducer.user);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToFavorites = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    try {
      dispatch(addUserToFavorites(user));
      enqueueSnackbar("Added to favorites successfully!", {
        variant: "success",
      });
    } catch (err) {
      enqueueSnackbar("Failed to add to favorites ", { variant: "error" });
    }
  };

  const handleRemoveFromFavorites = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    try {
      dispatch(removeUserFromFavorites(user?.id));
      enqueueSnackbar("Removed from favorites successfully!", {
        variant: "success",
      });
    } catch (err) {
      enqueueSnackbar("Failed to remove from favorites", { variant: "error" });
    }
  };

  const handleNavigate = () => {
    navigate(`/user-detail/${user?.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            alt={user?.firstName}
            src={user?.image}
            sx={{
              width: 56,
              height: 56,
              padding: 1,
              border: `1px solid #e1dede`,
            }}
          />
        }
        title={`${user?.firstName} ${user?.lastName}`}
        subheader={user?.company?.title}
      />
      <Divider style={{ width: "90%", margin: "auto" }} />
      <CardContent style={{ paddingTop: 10, paddingBottom: 0 }}>
        <CardContentBox icon={MailOutline} text={user?.email} />
        <CardContentBox icon={Call} text={user?.phone} />
        <CardContentBox icon={Place} text={user?.address?.address} />
      </CardContent>
      <CardActions>
        <IconButton aria-label="view detail" onClick={handleNavigate}>
          <Tooltip TransitionComponent={Zoom} title="Click to view details">
            <Visibility />
          </Tooltip>
        </IconButton>
        {isUserAddedToFavorites(favoriteUsers, user?.id) ? (
          <IconButton
            aria-label="Remove from favorites"
            onClick={(e) => handleRemoveFromFavorites(e)}
          >
            <Tooltip TransitionComponent={Zoom} title="Remove from favorites">
              <FavoriteIcon />
            </Tooltip>
          </IconButton>
        ) : (
          <IconButton
            aria-label="Add to favorites"
            onClick={(e) => handleAddToFavorites(e)}
          >
            <Tooltip TransitionComponent={Zoom} title="Add to favorites">
              <FavoriteBorder />
            </Tooltip>
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
export default UserCard;
