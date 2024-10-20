const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const http = require("http"); // Import http for Socket.IO
const { Server } = require("socket.io"); // Import Socket.IO
const express = require("express");

const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");

dotenv.config();
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/errorMiddleware");
const dbConnection = require("./config/db");
// Routes
const mountRoutes = require("./routes");
// DB Connection
dbConnection();

// Express app
const app = express();
app.use(cors("*"));
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "uploads")));
app.use(helmet.crossOriginEmbedderPolicy({ policy: "credentialless" }));

app.use(compression());

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Mode : ${process.env.NODE_ENV}`);
}

app.use(express.urlencoded({ extended: false }));
app.use(
  hpp({
    whitelist: ["search"],
  })
);

// Data sanitization
app.use(mongoSanitize());
app.use(xss());

// Mount Routes
mountRoutes(app);

// Error handling middleware
app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route : ${req.originalUrl}`, 400));
});
app.use(globalError);

// Initialize HTTP server and Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: "*"
});

// Listen for socket connections

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Event listeners for user disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  // Event listeners for different actions and broadcasting to all clients
  socket.on("ipadded", (data) => {
    console.log(data, "added ip");
    io.emit("newipadded", data); // Broadcast IP added notification to all connected clients
  });

  socket.on("domainadded", (data) => {
    io.emit("Newdomainadded", data); // Broadcast domain added notification
  });

  socket.on("portaladded", (data) => {
    io.emit("Newportaladded", data); // Broadcast portal added notification
  });

  socket.on("iocadded", (data) => {
    io.emit("Newiocadded", data); // Broadcast IOC added notification
  });

  socket.on("suspiciousipadded", (data) => {
    io.emit("Newsuspiciousipadded", data); // Broadcast suspicious IP added notification
  });

  socket.on("aptfeedadded", (data) => {
    io.emit("Newaptfeedadded", data); // Broadcast APT feed added notification
  });

  socket.on("threatintelligencefeedadded", (data) => {
    io.emit("Newthreatintelligencefeedadded", data); // Broadcast threat intelligence feed added notification
  });

  socket.on("threatnewsadded", (data) => {
    io.emit("Newthreatnewsadded", data); // Broadcast threat news added notification
  });

  socket.on("geowatchadded", (data) => {
    io.emit("Newgeowatchadded", data); // Broadcast geowatch added notification
  });

  socket.on("darkwebmentionadded", (data) => {
    io.emit("Newdarkwebmentionadded", data); // Broadcast dark web mention added notification
  });

  socket.on("leakedcredentialadded", (data) => {
    io.emit("Newleakedcredentialadded", data); // Broadcast leaked credential added notification
  });

  socket.on("edrxdradded", (data) => {
    io.emit("Newedrxdradded", data); // Broadcast EDR/XDR added notification
  });

  socket.on("ndradded", (data) => {
    io.emit("Newndradded", data); // Broadcast NDR added notification
  });

  socket.on("atoded", (data) => {
    io.emit("Newatoded", data); // Broadcast ATO added notification
  });

  socket.on("impersonationadded", (data) => {
    io.emit("Newimpersonationadded", data); // Broadcast impersonation added notification
  });

  socket.on("executivevipprotectionadded", (data) => {
    io.emit("Newexecutivevipprotectionadded", data); // Broadcast executive VIP protection added notification
  });

  socket.on("monthlyvolumeadded", (data) => {
    io.emit("Newmonthlyvolumeadded", data); // Broadcast monthly volume added notification
  });

  socket.on("cyberratingadded", (data) => {
    io.emit("Newcyberratingadded", data); // Broadcast cyber rating added notification
  });

  socket.on("attacktrendadded", (data) => {
    io.emit("Newattacktrendadded", data); // Broadcast attack trend added notification
  });

  socket.on("attacksurfaceadded", (data) => {
    io.emit("Newattacksurfaceadded", data); // Broadcast attack surface added notification
  });

  socket.on("brandreputationadded", (data) => {
    io.emit("Newbrandreputationadded", data); // Broadcast brand reputation added notification
  });

  socket.on("vulnerabilitiesintelligenceadded", (data) => {
    io.emit("Newvulnerabilitiesintelligenceadded", data); // Broadcast vulnerabilities intelligence added notification
  });

  socket.on("noncompliancegapsoverviewadded", (data) => {
    io.emit("Newnoncompliancegapsoverviewadded", data); // Broadcast non-compliance gaps overview added notification
  });

  socket.on("threatcompositionoverviewadded", (data) => {
    io.emit("Newthreatcompositionoverviewadded", data); // Broadcast threat composition overview added notification
  });

  socket.on("securityposturescoreadded", (data) => {
    io.emit("Newsecurityposturescoreadded", data); // Broadcast security posture score added notification
  });

  socket.on("securitybreachindicatorsadded", (data) => {
    io.emit("Newsecuritybreachindicatorsadded", data); // Broadcast security breach indicators added notification
  });

  socket.on("reportincidentadded", (data) => {
    io.emit("Newreportincidentadded", data); // Broadcast report incident added notification
  });

  socket.on("ttdttradded", (data) => {
    io.emit("Newttdttradded", data); // Broadcast TTD/TTR added notification
  });

  socket.on("digitalriskintelligenceadded", (data) => {
    io.emit("Newdigitalriskintelligenceadded", data); // Broadcast digital risk intelligence added notification
  });

  socket.on("mitreattackadded", (data) => {
    io.emit("Newmitreattackadded", data); // Broadcast MITRE ATT&CK added notification
  });

  socket.on("cyberkillchainadded", (data) => {
    io.emit("Newcyberkillchainadded", data); // Broadcast cyber kill chain added notification
  });

  socket.on("cybersecuritytrendadded", (data) => {
    io.emit("Newcybersecuritytrendadded", data); // Broadcast cybersecurity trend added notification
  });

  socket.on("SupplyChainThreatExposureadded", (data) => {
    io.emit("NewSupplyChainThreatExposureadded", data); // Broadcast supply chain threat exposure added notification
  });

  socket.on("cyberAttackTrendadded", (data) => {
    io.emit("NewcyberAttackTrendadded", data); // Broadcast cyber attack trend added notification
  });

  socket.on("cyberResilienceTimeadded", (data) => {
    io.emit("NewcyberResilienceTimeadded", data); // Broadcast cyber resilience time added notification
  });

  socket.on("userBehavioradded", (data) => {
    io.emit("NewuserBehavioradded", data); // Broadcast user behavior added notification
  });

  socket.on("slacompliance", (data) => {
    io.emit("Newslacompliance", data); // Broadcast SLA compliance added notification
  });

  socket.on("AttackTrendsAcrossLockHead", (data) => {
    io.emit("NewAttackTrendsAcrossLockHead", data); // Broadcast attack trends across LockHead notification
  });
});

// Start the server
const PORT = process.env.PORT || 3000 || 8000 || 14150;
server.listen(PORT, () => console.log(`Running on port: ${PORT}`));

// Handling Errors (rejections) Outside Express
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.name} | ${err.message}`);
  server.close(() => {
    console.log("Shutting down...");
    process.exit(1);
  });
});
