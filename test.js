// Dummy JavaScript code

      if (window.location.host.includes('springboard')) {
        try {
          sessionStorage.getItem('loadingTimer')
        } catch (e) {
          // when fail no settings
          const url = btoa(window.location.href)
          window.location.replace(`/noSupport.html?url=${url}`)
        }
      }

      const onUnauthenticated = returnUrl => {
        const currentLocation = `${window.location.pathname}${window.location.search}`
        function setLocation(newLocation) {
          window.location.href = newLocation
        }

        const mySetLocation = setLocation // for testing
        const encodedLocation = encodeURIComponent(currentLocation)
        if (localStorage.getItem('id_token')) {
          localStorage.removeItem('id_token')
          localStorage.removeItem('refresh_token')
          localStorage.removeItem('complianceFeatureEnabled')
          if (returnUrl) {
            mySetLocation(returnUrl)
          } else {
            mySetLocation(`/login?state=${encodedLocation}#/expiration`)
          }
        } else if (returnUrl) {
          mySetLocation(returnUrl)
        } else {
          mySetLocation(`/login?state=${encodedLocation}#/`)
        }
      }

      const sendAuthStatus = authenticated => {
        const targetWindows = []
        // resists crash when window is undefined or null
        const { parent, opener } = { ...window }
        if (parent && parent !== window) {
          targetWindows.push(parent)
        }
        if (opener && opener !== window) {
          targetWindows.push(opener)
        }
        targetWindows.forEach(win =>
          win.postMessage(
            {
              authStatus: { authenticated },
            },
            '*'
          )
        )
      }

      const auth = () => {
        const isLogin = document.location.pathname === '/login'
        if (isLogin) {
          return
        } else if (document.location.pathname.includes('sftp-account')) {
          return
        }
        const idToken = localStorage.getItem('id_token')
        sendAuthStatus(Boolean(idToken))
        if (!idToken) {
          onUnauthenticated()
        }
      }

      auth()

      const isLogin = document.location.pathname === 'login'
      if (
        /performancetest=[\w-]*(console|sitespeed)/i.test(
          decodeURIComponent(window.location.search)
        ) ||
        JSON.parse(sessionStorage.getItem('loadingTimer'))
      ) {
        const now = Math.round(window.performance.now())
        const loginLabel = isLogin ? 'Login ' : ''
        const message =
          ' - Loading index.html (page load to start of index.html): '
        const prefix = 'Performance Test - '
        console.log(prefix + now + message + now + ' ms')
        // For Sitespeed
        window.performance.mark(prefix + message + '[duration: ' + now + ']')
        window.performance.mark('percipio_start Rendering index.html')
      }
      window.VIDEOJS_NO_DYNAMIC_STYLE = true</script> 
<script nonce="72d3e56a1c200634cebc0536e8e40b54">
window.allowFilterConsole = false
window.allowMocks = false
window.assetUrl = 'https://cdn3-percipio-qa.global.ssl.fastly.net/static/staging-us/'
window.assignmentsURL = 'http://assignment-api.cross-services.svc.cluster.local/api'
window.auth0Domain = 'use1-stage-auth-staging.percipio.com'
window.authPassportLoginUrl = 'https://api.stage.percipio.com/saml/login'
window.authPassportLogoutUrl = 'https://api.stage.percipio.com/saml/logout'
window.authPassportUrl = 'https://api.stage.percipio.com/saml'
window.bookSessionTimeout = ''
window.certitudeACCQuestionnaireId = '4442A2C4-5BFA-4236-BF86-50C3E481B1CD'
window.certitudeCpeQuestionnaireId = '1252C668-20AE-4856-A470-DF66BD2A5CCE'
window.chatbotBFFUrl = 'https://teams-integration.stage.percipio.com/elsa'
window.chatButtonId = '5730c000000CwDu'
window.cookieConsentDomains = ["percipio.front.master.squads-dev.com","use1-stage-skillsoft-engtest.stage.percipio.com"]
window.createTicket = 'https://skillsoft.my.site.com/customer/WebToCasePercipio?product=All'
window.cspNonce = '72d3e56a1c200634cebc0536e8e40b54'
window.customCertificateDefaultLogo = 'https://cdn2.percipio.com/public/us/custom-content/f54dc5a9-5b6c-4ab1-9684-9e3fc7ef8993/public/images/saved/bf3edc91-7676-41ce-9e60-684704fbc351/skillsoft-navy.png'
window.customizationDefaultHeaderLogoUrl = 'https://cdn2-percipio-qastage.global.ssl.fastly.net/public/c/public/images/skillsoft-logo.png'
window.customizationDefaultLoginBackgroundUrl = 'https://cdn2.percipio.com/public/c/public/images/login-bg-2.jpg'
window.customizationDefaultSearchBackgroundUrl = 'https://cdn2.percipio.com/public/c/custom-content/public/images/saved/a5f8ba38-6699-4d0b-a2be-9214799aecaf/hero.png'
window.debug = {"environment":"preproduction","envName":"staging","envSpace":"","envRegion":"us"}
window.digitalBadgesURL = 'digitalbadges.skillsoft.com'
window.eCommerceSupportUrl = 'http://www.skillsoft.com/ecommerce-support'
window.eZsiteUrl = 'https://enrolldev.globalknowledge.com/siteName/en-us/Home/ExternalRegister?contactId='
window.googleAnalyticsTrackingId = 'UA-73431076-8'
window.gtmId = 'GTM-WFBW4HN'
window.higherlogicProxyOrgId = '1b2d68ed-e410-4cab-b15a-fb345812d43d'
window.imageBaseUrl = 'https://cdn2-percipio-qastage.global.ssl.fastly.net/public/c/public/images/'
window.jwplayerkey = 'mJ7UaenyBpRmiq7Yf0gu7UdEegMnslWCr7VhQrYte6+I3JXf'
window.JWTuserId = 'http://percipio.com/global/org_user_id'
window.labelGraphqlUrls = true
window.learnSiteUrl = ''
window.liveChat = 'https://skillsoft.my.site.com/customer/LiveAgentPortalPercipio?chatButtonId=573a00000000TTZ'
window.liveEventTestStreamMinutes = ''
window.lpFrontBuildNumber = '520'
window.manageSubscriptionEnabledOrgs = ["learn.percipio.com"]
window.mentoringUrl = 'https://skillsoft.my.site.com/customer/LiveagentPortalPercipioMentorChat'
window.mobileMarketingSite = 'https://www.skillsoft.com/platform-solution/percipio/'
window.optimisticFetchTimeout = '10000'
window.pendoEnabled = true
window.pendoKey = '75bb7f30-5132-4ccc-6e53-006579615798'
window.pendoUrl = 'https://content.guides.percipio.com'
window.prepaySourceCode = 'PAYGNA'
window.recaptchaPublicKey = '6LcH7QQcAAAAAP3-PAh5AOoYcdWnzyvXbY0RQEH2'
window.renewalThresholdInSec = '30'
window.renewSubscription = 'https://www.skillsoft.com/my-subscriptions'
window.restrictCodecademyContentForOrgId = '86780909-c768-4ef2-9877-2d63cf0a9770'
window.selfId = '6NxOmuzEBriAoJeZ6o7u5aGSfccyoRcW'
window.selfVersion = '1.141.35'
window.sessionBffURL = 'https://session-service-bff.stage.percipio.com/api'
window.sftpAccountServer = 'downloads.qual.skillport.com'
window.skillsoftCoachingLogoURL = 'https://cdn2.percipio.com/public/c/public/images/coaching/skillsoft-coaching.png'
window.technicalSupportAccountId = ''
window.zoomMeetingKey = '7lDxKby6RKqL2yaDVk04ng'
window.zoomMeetingSecretKey = 'hAMyfDWlfwH2FX7S3SRnkDSp3FFWyfjd'
