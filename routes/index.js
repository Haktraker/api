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

/*************************** Executive Dashboard *************** */
const QuarterlySecurityPostureScoreRoute = require("./Executive_Dashboard/QuarterlySecurityPostureScoreRoute");
const QuarterlyNonComplianceGapsOverviewRoute = require("./Executive_Dashboard/QuarterlyNonComplianceGapsOverviewRoute");
const QuarterlyThreatCompositionOverviewRoute = require("./Executive_Dashboard/QuarterlyThreatCompositionOverviewRoute");
const QuarterlySecurityBreachIndicatorsRoute = require("./Executive_Dashboard/QuarterlySecurityBreachIndicatorsRoute");
// const QuarterlyIncidentRoute = require("./Executive_Dashboard/QuarterlyIncidentRoute");
const incidentsQUROutes = require("./Executive_Dashboard/IncidentsRoutes");
const QuarterlyTtdTtrRoute = require("./Executive_Dashboard/QuarterlyTtdTtrRoute");
const QuarterlyDigitalRiskIntelligenceRoute = require("./Executive_Dashboard/QuarterlyDigitalRiskIntelligenceRoute");
const QuarterlyCyberSecurityTrendsRoute = require("./Executive_Dashboard/QuarterlyCyberSecurityTrendsRoute");
const QuarterlySecurityEventRoute = require("./Executive_Dashboard/QuarterlySecurityEventRoutes");
const QuarterlyVolumeRoutes = require("./Executive_Dashboard/QuarterlyVolumeRoutes");
const QuarterlyCyberRatingRoute = require("./Executive_Dashboard/QuarterlyCyberRatingRoutes");
const QuarterlyAttackTrendRoute = require("./Executive_Dashboard/QuarterlyAttackTrendRoutes");
const QuarterlyCyberAttackTrendsRoute = require("./Executive_Dashboard/QuarterlyCyberAttackTrendsRoutes");
const QuarterlyCyberResilienceTimeRoute = require("./Executive_Dashboard/QuarterlyCyberResilienceTimeRoutes");
const QuarterlyThirdPartyThreatRoute = require("./Executive_Dashboard/QuarterlyThirdPartyThreatRoutes");
const QuarterlySupplyChainThreatExposureRoute = require("./Executive_Dashboard/QuarterlySupplyChainThreatExposureRoutes");
/*************************** Executive Dashboard *************** */

/*************************** Report *************** */
const ReportSecurityPostureScoreRoute = require("./Reports/ReportSecurityPostureScoreRoute");
const ReportNonComplianceGapsOverviewRoute = require("./Reports/ReportNonComplianceGapsOverviewRoute");
const ReportThreatCompositionOverviewRoute = require("./Reports/ReportThreatCompositionOverviewRoute");
const ReportSecurityBreachIndicatorsRoute = require("./Reports/ReportSecurityBreachIndicatorsRoute");
const ReportIncidentRoute = require("./Reports/ReportMonthlyincidentRoute");
const ReportTtdTtrRoute = require("./Reports/ReportTtdTtrRoute");
const ReportDigitalRiskIntelligenceRoute = require("./Reports/ReportDigitalRiskIntelligenceRoute");
const ReportCyberSecurityTrendsRoute = require("./Reports/ReportCyberSecurityTrendsRoute");
const ReportSecurityEventRoute = require("./Reports/ReportSecurityEventRoutes");
const ReportMonthlyVolumeRoutes = require("./Reports/ReportMonthlyVolumeRoutes");
const ReportCyberRatingRoute = require("./Reports/ReportCyberRatingRoutes");
const ReportAttackTrendRoute = require("./Reports/ReportAttackTrendRoutes");
const ReportCyberAttackTrendsRoute = require("./Reports/ReportCyberAttackTrendsRoutes");
const ReportUserBehaviorRoutes = require("./Reports/ReportUserBehaviorRoutes");
const ReportsSlaComplianceRoutes = require("./Reports/ReportsSlaComplianceRoutes");
const ReportCyberResilienceTimeRoute = require("./Reports/ReportCyberResilienceTimeRoutes");
const ReportThirdPartyThreatRoute = require("./Reports/ReportThirdPartyThreatRoutes");
const ReportSupplyChainThreatExposureRoute = require("./Reports/ReportSupplyChainThreatExposureRoutes");
/*************************** Report *************** */

// Attack Secnarios
const MitreAttacksRoute = require("./Attack_Scenarios/MitreAttacksRoute");
const CyberKillChainRoute = require("./Attack_Scenarios/CyberKillChainRoute");

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
  app.use("/api/attack-scenarios/mitre-attacks", MitreAttacksRoute);
  app.use("/api/attack-scenarios/cyber-kill-chain", CyberKillChainRoute);

  /*************************** Executive Dashboard *************** */
  app.use(
    "/api/executive-dashboard/security-posture-score",
    QuarterlySecurityPostureScoreRoute
  );
  app.use(
    "/api/executive-dashboard/non-compliance-gaps-overview",
    QuarterlyNonComplianceGapsOverviewRoute
  );
  app.use(
    "/api/executive-dashboard/threat-composition-overview",
    QuarterlyThreatCompositionOverviewRoute
  );
  app.use(
    "/api/executive-dashboard/security-breach-indicators",
    QuarterlySecurityBreachIndicatorsRoute
  );
  // app.use(
  //   "/api/executive-dashboard/quarterly-incident",
  //   QuarterlyIncidentRoute
  // );

  app.use("/api/executive-dashboard/incidents-qu", incidentsQUROutes);
  app.use("/api/executive-dashboard/ttd-ttr", QuarterlyTtdTtrRoute);
  app.use(
    "/api/executive-dashboard/digital-risk-intelligence",
    QuarterlyDigitalRiskIntelligenceRoute
  );
  app.use(
    "/api/executive-dashboard/cyber-security-trends",
    QuarterlyCyberSecurityTrendsRoute
  );
  app.use(
    "/api/executive-dashboard/third-party-threat",
    QuarterlyThirdPartyThreatRoute
  );
  app.use(
    "/api/executive-dashboard/supply-chain-threat-exposure",
    QuarterlySupplyChainThreatExposureRoute
  );
  app.use(
    "/api/executive-dashboard/cyber-resilience-time",
    QuarterlyCyberResilienceTimeRoute
  );
  app.use(
    "/api/executive-dashboard/security-event",
    QuarterlySecurityEventRoute
  );
  app.use("/api/executive-dashboard/quarterly-volume", QuarterlyVolumeRoutes);
  app.use("/api/executive-dashboard/cyber-rating", QuarterlyCyberRatingRoute);
  app.use("/api/executive-dashboard/attack-trend", QuarterlyAttackTrendRoute);
  app.use(
    "/api/executive-dashboard/cyber-attack-trends",
    QuarterlyCyberAttackTrendsRoute
  );
  /*************************** Executive Dashboard *************** */

  /*************************** Reports *************** */
  app.use(
    "/api/reports/security-posture-score",
    ReportSecurityPostureScoreRoute
  );
  app.use(
    "/api/reports/non-compliance-gaps-overview",
    ReportNonComplianceGapsOverviewRoute
  );
  app.use(
    "/api/reports/threat-composition-overview",
    ReportThreatCompositionOverviewRoute
  );
  app.use(
    "/api/reports/security-breach-indicators",
    ReportSecurityBreachIndicatorsRoute
  );
  app.use("/api/reports/monthly-incident", ReportIncidentRoute);
  app.use("/api/reports/ttd-ttr", ReportTtdTtrRoute);
  app.use(
    "/api/reports/digital-risk-intelligence",
    ReportDigitalRiskIntelligenceRoute
  );
  app.use("/api/reports/cyber-security-trends", ReportCyberSecurityTrendsRoute);
  app.use("/api/reports/third-party-threat", ReportThirdPartyThreatRoute);
  app.use(
    "/api/reports/supply-chain-threat-exposure",
    ReportSupplyChainThreatExposureRoute
  );
  app.use("/api/reports/cyber-resilience-time", ReportCyberResilienceTimeRoute);
  app.use("/api/reports/security-event", ReportSecurityEventRoute);
  app.use("/api/reports/monthly-volume", ReportMonthlyVolumeRoutes);
  app.use("/api/reports/cyber-rating", ReportCyberRatingRoute);
  app.use("/api/reports/attack-trend", ReportAttackTrendRoute);
  app.use("/api/reports/cyber-attack-trends", ReportCyberAttackTrendsRoute);
  app.use("/api/reports/user-behavior", ReportUserBehaviorRoutes);
  app.use("/api/reports/sla-compliance", ReportsSlaComplianceRoutes);
  /*************************** Reports *************** */

  app.use("/api/users", userRoute);
  app.use("/api/auth", authRoute);
};

module.exports = mountRoutes;
