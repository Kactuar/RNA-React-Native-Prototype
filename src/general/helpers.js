export const getAvatarUtl = (email, size = 200) => {
    return `http://api.adorable.io/avatars/${size}/${email}`;
};
