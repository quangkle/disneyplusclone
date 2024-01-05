export const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Clap_cinema.svg/564px-Clap_cinema.svg.png?20220913221442";
}