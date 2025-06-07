import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ChatbotPanel = ({ open, onClose }) => {

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 360, height: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Box
          sx={{
            backgroundColor: "#002D72",
            color: "white",
            px: 2,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTopRightRadius: "10px",
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar src="https://i.pravatar.cc/300" alt="Bot" sx={{ mr: 1 }} />
            <Box>
              <Typography variant="subtitle1">Chat with FM-Bot</Typography>
              <Typography variant="caption" sx={{ color: "#a2fca2" }}>
                We're Here to Make your imagination into reality
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton sx={{ color: "white" }}>
              <SettingsIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} onClick={onClose}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Messages */}
        <Box sx={{ flex: 1, p: 2, overflowY: "auto" }}>
          <Box
            sx={{
              backgroundColor: "#f1f1f1",
              borderRadius: 2,
              p: 1,
              mb: 1,
              maxWidth: "80%",
            }}
          >
          </Box>
          <Box
            sx={{
              backgroundColor: "#f1f1f1",
              borderRadius: 2,
              p: 1,
              maxWidth: "80%",
            }}
          >
          </Box>
        </Box>

        {/* Input area */}
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 1,
            gap: 1,
            borderTop: "1px solid #ccc",
          }}
        >
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <InputBase
            placeholder="Enter your message..."
            fullWidth
            sx={{ flex: 1, backgroundColor: "#f5f5f5", px: 2, borderRadius: 4 }}
          />
          <IconButton color="primary">
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ChatbotPanel;