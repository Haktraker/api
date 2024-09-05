// assets
const ipRoute = require("./assets/ipRoute");
const domainRoute = require("./assets/domainsRoute");
const portalsRoute = require("./assets/portalsRoute");
// dark-web-monitoring
const darkWebMentionsRoute = require("./Dark_Web_Monitoring/darkWebMentionRoute");
const leakedCredentialsRoute = require("./Dark_Web_Monitoring/leakedCredentialsRoute");
// Threat Intelligence
const aptFeedsRoute = require("./Threat_Intelligence/aptFeedsRoute");
const iocsRoute = require("./Threat_Intelligence/iocsRoute");
const suspiciousIPsRoute = require("./Threat_Intelligence/suspiciousIPsRoute");
const threatIntelligenceFeedsRoute = require("./Threat_Intelligence/threatIntelligenceFeedsRoute");
const geoWatchRoute = require("./Threat_Intelligence/geoWatchRoute");
const threatNewsRoute = require("./Threat_Intelligence/threatNewsRoute");
// Account Take Over
const accountTakeoverRoute = require("./Account_Take_Over/accountTakeoverRoute");
const impersonationRoute = require("./Account_Take_Over/impersonationRoute");
const executiveVipProtectionRoute = require("./Account_Take_Over/executiveVipProtectionRoute");
// Attck Surface
const attackSurfaceRoute = require("./attackSurfaceRoute");
// Brand Reputation
const brandReputationRoute = require("./brandReputationRoute");
// Vulnerabilities Intelligences
const vulnerabilitiesIntelligencesRoute = require("./vulnerabilitiesIntelligencesRoute");
// EDRXDRDetection
const EDRXDRDetectionsRoute = require("./Detections/EDRXDRDetectionsRoute");
// NDRDetection
const NDRDetectionsRoute = require("./Detections/NDRDetectionsRoute");

// Executive Dashboard
const SecurityPostureScoreRoute = require("./Executive_Dashboard/SecurityPostureScoreRoute");
const NonComplianceGapsOverviewRoute = require("./Executive_Dashboard/NonComplianceGapsOverviewRoute");
const ThreatCompositionOverviewRoute = require("./Executive_Dashboard/ThreatCompositionOverviewRoute");
const SecurityBreachIndicatorsRoute = require("./Executive_Dashboard/SecurityBreachIndicatorsRoute");
const QuarterlyIncidentRoute = require("./Executive_Dashboard/QuarterlyIncidentRoute");
const TtdTtrRoute = require("./Executive_Dashboard/TtdTtrRoute");
const DigitalRiskIntelligenceRoute = require("./Executive_Dashboard/DigitalRiskIntelligenceRoute");
const CyberSecurityTrendsRoute = require("./Executive_Dashboard/CyberSecurityTrendsRoute");

// Attack Secnarios
const MitreAttacksRoute = require("./Attack_Scenarios/MitreAttacksRoute");
const CyberKillChainRoute = require("./Attack_Scenarios/CyberKillChainRoute");
const ThirdPartyThreatRoute = require("./Executive_Dashboard/ThirdPartyThreatRoutes");
const SupplyChainThreatExposureRoute = require("./Executive_Dashboard/SupplyChainThreatExposureRoutes");

const SecurityEventRoute = require("./SecurityEventRoutes");
const MonthlyVolumeRoute = require("./MonthlyVolumeRoutes");
const CyberRatingRoute = require("./CyberRatingRoutes");
const AttackTrendRoute = require("./AttackTrendRoutes");
const CyberAttackTrendsRoute = require("./CyberAttackTrendsRoutes");
const CyberResilienceTimeRoute = require("./Executive_Dashboard/CyberResilienceTimeRoutes");

const userRoute = require("./userRoute");
const authRoute = require("./authRoute");
const { limiter } = require("../middlewares/rateLimiterMiddleware");

/**************************************mount Routes****************************************** */

const mountRoutes = (app) => {
  // assets
  app.use("/api/assets/ips", ipRoute);
  app.use("/api/assets/domains", domainRoute);
  app.use("/api/assets/portals", portalsRoute);

  // dark-web-monitoring
  app.use("/api/dark-web-monitoring/dark-web-mentions", darkWebMentionsRoute);
  app.use(
    "/api/dark-web-monitoring/leaked-credentials",
    leakedCredentialsRoute
  );

  // Threat Intelligence
  app.use("/api/threat-intelligence/apt-feeds", aptFeedsRoute);
  app.use("/api/threat-intelligence/iocs", iocsRoute);
  app.use("/api/threat-intelligence/suspicious-ips", suspiciousIPsRoute);
  app.use(
    "/api/threat-intelligence/threat-intelligence-feeds",
    threatIntelligenceFeedsRoute
  );
  app.use("/api/threat-intelligence/threat-news", threatNewsRoute);
  app.use("/api/threat-intelligence/geo-watch", geoWatchRoute);
  // Attack SurfaceRoute
  app.use("/api/attack-surface", attackSurfaceRoute);

  // Account Take Over
  app.use("/api/atos/account-take-over", accountTakeoverRoute);
  app.use("/api/atos/impersonations", impersonationRoute);
  app.use("/api/atos/executive-vip-protection", executiveVipProtectionRoute);

  // Brand Reputation
  app.use("/api/brand-reputation", brandReputationRoute);
  // vulnerabilities intelligences
  app.use(
    "/api/vulnerabilities-intelligences",
    vulnerabilitiesIntelligencesRoute
  );
  // EDRXDR Detections
  app.use("/api/detections/edrxdr-detections", EDRXDRDetectionsRoute);
  // NDR Detections
  app.use("/api/detections/ndr-detections", NDRDetectionsRoute);

  // Executive Dashboard
  app.use(
    "/api/executive-dashboard/security-posture-score",
    SecurityPostureScoreRoute
  );
  app.use(
    "/api/executive-dashboard/non-compliance-gaps-overview",
    NonComplianceGapsOverviewRoute
  );
  app.use(
    "/api/executive-dashboard/threat-composition-overview",
    ThreatCompositionOverviewRoute
  );
  app.use(
    "/api/executive-dashboard/security-breach-indicators",
    SecurityBreachIndicatorsRoute
  );
  app.use(
    "/api/executive-dashboard/quarterly-incident",
    QuarterlyIncidentRoute
  );
  app.use("/api/executive-dashboard/ttd-ttr", TtdTtrRoute);
  app.use(
    "/api/executive-dashboard/digital-risk-intelligence",
    DigitalRiskIntelligenceRoute
  );
  app.use(
    "/api/executive-dashboard/cyber-security-trends",
    CyberSecurityTrendsRoute
  );
  app.use("/api/attack-scenarios/mitre-attacks", MitreAttacksRoute);
  app.use("/api/attack-scenarios/cyber-kill-chain", CyberKillChainRoute);

  app.use("/api/executive-dashboard/third-party-threat", ThirdPartyThreatRoute);
  app.use(
    "/api/executive-dashboard/supply-chain-threat-exposure",
    SupplyChainThreatExposureRoute
  );
  app.use(
    "/api/executive-dashboard/cyber-resilience-time",
    CyberResilienceTimeRoute
  );

  app.use("/api/security-event", SecurityEventRoute);
  app.use("/api/monthly-volume", MonthlyVolumeRoute);
  app.use("/api/cyber-rating", CyberRatingRoute);
  app.use("/api/attack-trend", AttackTrendRoute);
  app.use("/api/cyber-attack-trends", CyberAttackTrendsRoute);

  app.use("/api/users", limiter, userRoute);
  app.use("/api/auth", authRoute);
};

module.exports = mountRoutes;
