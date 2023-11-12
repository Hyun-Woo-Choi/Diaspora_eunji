import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia"; // Correct import statement
import Typography from "@mui/material/Typography";

interface BlurbCardProps {
  ISBN: string;
  Author_Translated: string | null;
  Author: string;
  Title: string[] | string;
  OriginalTitle: string[] | string;
  Publisher: string;
  PublicationDate: string;
  Genre1: string | null;
  Genre2: string | null;
  Genre3: string | null;
  Genre4: string | null;
  Genre5: string | null;
}

const BlurbCard: React.FC<BlurbCardProps> = ({
  ISBN,
  Author_Translated,
  Author,
  Title,
  OriginalTitle,
  Publisher,
  PublicationDate,
  Genre1,
  Genre2,
  Genre3,
  Genre4,
}) => {
  const imageUrl = `../static/Book_Covers_SK/${ISBN}.jpg`;
  console.log(imageUrl);

  return (
    <Card>
      <img src="../static/Book_Covers_SK/9791158792046.JPG" alt="" />
      <CardMedia
        component="img"
        alt="Book Cover"
        height="140"
        // image={imageUrl}
        image={"../static/Book_Covers_SK/9791158792046.JPG"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlurbCard;
