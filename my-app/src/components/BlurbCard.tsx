import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; // Correct import statement
import Typography from '@mui/material/Typography';

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
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  if (`/static/Book_Covers_SK/${ISBN}.jpg` === undefined) {
    setImageUrl(
      'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000&t=st=1700365885~exp=1700366485~hmac=080cf6f7e768fa2d3497b467c311e9876c103eb6794306b996db727e817a7817'
    );
  } else {
    setImageUrl(`../static/Book_Covers_SK/${ISBN}.jpg`);
  }

  return (
    <Card>
      {imageUrl ? (
        <CardMedia
          component="img"
          alt="Book Cover"
          height="auto"
          image={require(imageUrl)}
        />
      ) : (
        <span> no image </span>
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {OriginalTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlurbCard;
