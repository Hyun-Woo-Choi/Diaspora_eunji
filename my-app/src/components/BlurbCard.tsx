import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia"; // Correct import statement
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalContentMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent closing the modal when clicking inside it
    e.stopPropagation();
  };

  const ModalContent = (
    <div onMouseDown={handleModalContentMouseDown}>
      <Typography>{Title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {OriginalTitle}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        by {Author}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Published {PublicationDate}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Author Translated: {Author_Translated}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Publisher: {Publisher}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Genre
        <hr />
        {Genre1}
        <hr />
        {Genre2},
        <hr />
        {Genre3},
        <hr />
        {Genre4}
      </Typography>
    </div>
  );

  try {
    var imageUrl = require(`../static/Book_Covers_SK/${ISBN}.JPG`);
  } catch (error) {
    // var imageUrl = require("https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000&t=st=1700365885~exp=1700366485~hmac=080cf6f7e768fa2d3497b467c311e9876c103eb6794306b996db727e817a7817");
    console.log(error);
  }

  return (
    <Card sx={{ width: 345, margin: 1 }} onClick={handleCardClick}>
      <CardMedia
        component="img"
        alt="Book Cover"
        height="515"
        image={imageUrl}
      />
      <CardContent sx={{ height: 90 }}>
        <Typography gutterBottom variant="h5" component="div">
          {OriginalTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Author}
        </Typography>
        <Modal open={isModalOpen} onClose={handleCardClick}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            {ModalContent}
          </div>
        </Modal>
      </CardContent>
    </Card>
  );
};

export default BlurbCard;
