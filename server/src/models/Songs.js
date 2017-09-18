module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    // Because String limited to 255 charcter thats why we need text
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  })
  return Song
}
