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
// ThreatDetection
const ThreatDetectionsRoute = require("./Detections/ThreatDetectionsRoute");
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
const ReportAttackTrendsAcrosstheLockheedCyberKillChainRoutes = require("./Reports/ReportAttackTrendsAcrosstheLockheedCyberKillChainRoutes");
const ReportThreatImpactOverViewRoutes = require("./Reports/ReportThreatImpactOverViewRoutes");
const ReportLockHeadPhasesRoute = require("./Reports/ReportLockHeadPhasesRoute");
const ReportThreatBreakDownRoutes = require("./Reports/ReportThreatBreakDownRoutes");
const ReportIncidentResponseMetricsRoutes = require("./Reports/ReportIncidentResponseMetricsRoutes");
const ReportThreatSeverityOverTimeRoutes = require("./Reports/ReportThreatSeverityOverTimeRoutes");
const ReportKillChainRoutes = require("./Reports/ReportKillChainRoutes");
/*************************** Report *************** */
/*************************** Admin *************** */
const createUserRoute = require("./userRoute");
/*************************** Admin *************** */

/**********************  UBA *********************************************/
const UserBehaviorAnalyticsRoutes = require("./User_Behavior/UserBehaviorAnalyticsRoutes");
const RiskScoreDistributionRoutes = require("./User_Behavior/RiskScoreDistributionRoutes");
const UserRiskTimelineRoutes = require("./User_Behavior/UserRiskTimelineRoutes");
const BehavioralPatternRoutes = require("./User_Behavior/BehavioralPatternRoutes");
const AnomalyCategoryDistributionRoutes = require("./User_Behavior/AnomalyCategoryDistributionRoutes");
const HighRiskUsersRoutes = require("./User_Behavior/HighRiskUsersRoutes");
const AlertTrendAnalysisRoutes = require("./User_Behavior/AlertTrendAnalysisRoutes");
const UserBehaviorPatternAnalysisRoutes = require("./User_Behavior/UserBehaviorPatternAnalysisRoutes");
const RealTimeActivityFeedRoutes = require("./User_Behavior/RealTimeActivityFeedRoutes");

/**********************  UBA *********************************************/
/**********************  Bu Security *********************************************/
const BuAlertsRoutes = require("./Business_Units_Security/BuAlertsRoutes");
const AlertSeverityTrendRoutes = require("./Business_Units_Security/AlertSeverityTrendRoutes");
const CompanyRiskScoresRoutes = require("./Business_Units_Security/CompanyRiskScoresRoutes");
const RecentSecurityEventsRoutes = require("./Business_Units_Security/RecentSecurityEventsRoutes");
const BUIncidentResponseMetricsRoute = require("./Business_Units_Security/BUIncidentResponseMetricsRoute");
const VulnerabilitiesAndPatchedRoutes = require("./Business_Units_Security/VulnerabilitiesAndPatchedRoutes");
const RiskAssessmentByBuRoutes = require("./Business_Units_Security/RiskAssessmentByBuRoutes");
const SocTeamPerformanceRoutes = require("./Business_Units_Security/SocTeamPerformanceRoutes");
const IncidentsByCategoryRoutes = require("./Business_Units_Security/IncidentsByCategoryRoutes");
const AlertTypeDistributionRoutes = require("./Business_Units_Security/AlertTypeDistributionRoutes");
const VulnerabilityByAssetTypeRoutes = require("./Business_Units_Security/VulnerabilityByAssetTypeRoutes");
const NetworkSecurityRoutes = require("./Business_Units_Security/NetworkSecurityRoutes");
/**********************  Bu Security *********************************************/

/**********************  Non Compliance Gaps Dashboard *********************************************/
const NonComplianceGapsDashboardRoutes = require("./NonComplianceGapsDashboard/NonComplianceGapsDashboardRoutes");
const ComplianceTrendRoutes = require("./NonComplianceGapsDashboard/ComplianceTrendRoutes");
const ControlCategoryPerformanceRoutes = require("./NonComplianceGapsDashboard/ControlCategoryPerformanceRoutes");
const ComplianceRiskDistributionRoutes = require("./NonComplianceGapsDashboard/ComplianceRiskDistributionRoutes");
const BusinessUnitPerformanceRoutes = require("./NonComplianceGapsDashboard/BusinessUnitPerformanceRoutes");
const FrameWorkInfoRoutes = require("./NonComplianceGapsDashboard/FrameWorkInfoRoutes");
/**********************  Non Compliance Gaps Dashboard *********************************************/

/**********************  Security Breach Indicators Dashboard *********************************************/
const SecurityBreachIndicatorsScoresRoutes = require("./SecurityBreachIndicatorsDashboard/SecurityBreachIndicatorsScoresRoutes");
const SecurityIncidentTrendRoutes = require("./SecurityBreachIndicatorsDashboard/SecurityIncidentTrendRoutes");
const MttrMttcMttmRoutes = require("./SecurityBreachIndicatorsDashboard/MttrMttcMttmRoutes");
const NetworkAnomaliesRoutes = require("./SecurityBreachIndicatorsDashboard/NetworkAnomaliesRoutes");
const UserRiskDistributionRoutes = require("./SecurityBreachIndicatorsDashboard/UserRiskDistributionRoutes");
const VulnerabilityStatusRoutes = require("./SecurityBreachIndicatorsDashboard/VulnerabilityStatusRoutes");
const ComplianceScoreRoutes = require("./SecurityBreachIndicatorsDashboard/ComplianceScoreRoutes");
const SecurityIssueRoutes = require("./SecurityBreachIndicatorsDashboard/SecurityIssueRoutes");
/**********************  Security Breach Indicators Dashboard *********************************************/

// Attack Secnarios
const MitreAttacksRoute = require("./Attack_Scenarios/MitreAttacksRoute");
const CyberKillChainRoute = require("./Attack_Scenarios/CyberKillChainRoute");

const userRoute = require("./userRoute");
const authRoute = require("./authRoute");
const generateResponseRoutes = require("./generateResponseRoutes");
const { limiter } = require("../middlewares/rateLimiterMiddleware");

/**************************************mount Routes****************************************** */

const mountRoutes = (app) => {
  // admin
  app.use("/api/create-user", createUserRoute);
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
  app.use("/api/detections/threat-detections", ThreatDetectionsRoute);
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
  app.use(
    "/api/reports/attack-trends-across-lock-head",
    ReportAttackTrendsAcrosstheLockheedCyberKillChainRoutes
  );
  app.use(
    "/api/reports/threat-impact-overView",
    ReportThreatImpactOverViewRoutes
  );
  app.use("/api/reports/lock-head-phases", ReportLockHeadPhasesRoute);
  app.use("/api/reports/threat-breakdown", ReportThreatBreakDownRoutes);
  app.use(
    "/api/reports/incident-response-metrics",
    ReportIncidentResponseMetricsRoutes
  );
  app.use(
    "/api/reports/threat-severity-overtime",
    ReportThreatSeverityOverTimeRoutes
  );
  app.use("/api/reports/kill-chain-table", ReportKillChainRoutes);
  /*************************** Reports *************** */

  /*****************  UBA ***************************/
  app.use("/api/uba/analytics", UserBehaviorAnalyticsRoutes);
  app.use("/api/uba/risk-score-distributions", RiskScoreDistributionRoutes);
  app.use("/api/uba/user-risk-timeline", UserRiskTimelineRoutes);
  app.use("/api/uba/behavioral-pattern", BehavioralPatternRoutes);
  app.use(
    "/api/uba/anomaly-category-distribution",
    AnomalyCategoryDistributionRoutes
  );
  app.use("/api/uba/high-risk-users", HighRiskUsersRoutes);
  app.use("/api/uba/alert-trend-analysis", AlertTrendAnalysisRoutes);
  app.use(
    "/api/uba/user-behavior-pattern-analysis",
    UserBehaviorPatternAnalysisRoutes
  );
  app.use("/api/uba/realtime-activity-feed", RealTimeActivityFeedRoutes);

  /*****************  UBA ***************************/

  /*****************  Bu Security ***************************/
  app.use("/api/bu-security/bu-alerts", BuAlertsRoutes);
  app.use("/api/bu-security/alert-severity-trends", AlertSeverityTrendRoutes);
  app.use("/api/bu-security/company-risk-scores", CompanyRiskScoresRoutes);
  app.use(
    "/api/bu-security/recent-security-events",
    RecentSecurityEventsRoutes
  );
  app.use(
    "/api/bu-security/bu-incident-response-metrics",
    BUIncidentResponseMetricsRoute
  );
  app.use(
    "/api/bu-security/vulnerabilities-and-patched",
    VulnerabilitiesAndPatchedRoutes
  );
  app.use("/api/bu-security/risk-assessments-by-bu", RiskAssessmentByBuRoutes);
  app.use("/api/bu-security/soc-team-performance", SocTeamPerformanceRoutes);
  app.use("/api/bu-security/incidents-by-category", IncidentsByCategoryRoutes);
  app.use(
    "/api/bu-security/alert-type-distribution",
    AlertTypeDistributionRoutes
  );
  app.use(
    "/api/bu-security/vulnerability-by-asset-type",
    VulnerabilityByAssetTypeRoutes
  );
  app.use("/api/bu-security/network-security", NetworkSecurityRoutes);
  /*****************  Bu Security ***************************/

  /**********************  Non Compliance Gaps Dashboard *********************************************/
  app.use(
    "/api/non-compliance-gaps-dashboard/compliance-gaps-by-frame-work",
    NonComplianceGapsDashboardRoutes
  );
  app.use(
    "/api/non-compliance-gaps-dashboard/compliance-trend",
    ComplianceTrendRoutes
  );
  app.use(
    "/api/non-compliance-gaps-dashboard/control-category-performance",
    ControlCategoryPerformanceRoutes
  );
  app.use(
    "/api/non-compliance-gaps-dashboard/compliance-risk-distribution",
    ComplianceRiskDistributionRoutes
  );
  app.use(
    "/api/non-compliance-gaps-dashboard/business-unit-performance",
    BusinessUnitPerformanceRoutes
  );
  app.use(
    "/api/non-compliance-gaps-dashboard/frame-work-info",
    FrameWorkInfoRoutes
  );
  /**********************  Non Compliance Gaps Dashboard *********************************************/

  /**********************  Security Breach Indicators Dashboard *********************************************/
  app.use(
    "/api/security-breach-indicators-dashboard/security-breach-indicators-scores",
    SecurityBreachIndicatorsScoresRoutes
  );
  app.use(
    "/api/security-breach-indicators-dashboard/security-incident-trends",
    SecurityIncidentTrendRoutes
  );
  app.use(
    "/api/security-breach-indicators-dashboard/mttr-mttc-mttm",
    MttrMttcMttmRoutes
  );
  app.use(
    "/api/security-breach-indicators-dashboard/network-anomalies",
    NetworkAnomaliesRoutes
  );
  app.use(
    "/api/security-breach-indicators-dashboard/user-risk-distribution",
    UserRiskDistributionRoutes
  );
  app.use(
    "/api/security-breach-indicators-dashboard/vulnerability-status",
    VulnerabilityStatusRoutes
  );
  app.use(
    "/api/security-breach-indicators-dashboard/compliance-score",
    ComplianceScoreRoutes
  );
  app.use(
    "/api/security-breach-indicators-dashboard/security-issue",
    SecurityIssueRoutes
  );
  /**********************  Security Breach Indicators Dashboard *********************************************/

  app.use("/api/users", userRoute);
  app.use("/api/auth", authRoute);
  app.use("/", generateResponseRoutes);
};

module.exports = mountRoutes;
