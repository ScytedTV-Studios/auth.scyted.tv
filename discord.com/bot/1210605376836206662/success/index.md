---
title: Login
layout: page
type: dashboard
---
<div id="fullpage">
<style>
    .beta-box {
        position: absolute;
        top: calc(50% - 8px);
        left: calc(50% + 65px);
        transform: translateY(-50%);
        border: 2px solid black;
        border-radius: 5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: super;
    }

    .dashboard-text {
        display: inline-block;
        vertical-align: middle;
        text-align: center;
    }

    .h3-container {
        position: relative;
    }
</style>
<style>
    hr.has-background-black {
        display: none;
    }

    h1.title {
        display: none;
    }

    button {
        background-color: #FFFFFF;
        color: #111111;
        padding: 10px;
        font-size: 18px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border: 0.5px solid black;
    }

    button img {
        width: auto;
        height: 25px;
        vertical-align: middle;
        margin-right: 1.2px;
        display: inline-block;
        padding-bottom: 5px;
    }

    .login-container {
        background-color: #E5E5E5;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        padding: 20px;
        text-align: center;
        max-width: 400px;
        width: 90%;
        margin: 0 auto;
    }
</style>

<body>

<div class="login-container">
    <h3 class="h3-container">
        <span class="dashboard-text">ScytedTV Studios</span>
    </h3>
    <p>You have successfully authorized "ScytedTV Studios" with Discord. You may now close this page and go back to Discord.</p>
</div>
<div id="error-message" style="color: red;"></div>

<script src="https://api.scyted.tv/wave-development/dashboard/page-loading-script.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF3ZTHGQHE"></script>
<script src="dashboard-script.js"></script>
<script src="error-script.js"></script>

<script>
async function code(req, res) {
    try {
    // 1. Uses the code and state to acquire Discord OAuth2 tokens
    const code = req.query['code'];
    const discordState = req.query['state'];

    // make sure the state parameter exists
    const { clientState } = req.signedCookies;
    if (clientState !== discordState) {
      console.error('State verification failed.');
      return res.sendStatus(403);
    }

    const tokens = await discord.getOAuthTokens(code);

    // 2. Uses the Discord Access Token to fetch the user profile
    const meData = await discord.getUserData(tokens);
    const userId = meData.user.id;
    await storage.storeDiscordTokens(userId, {
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      expires_at: Date.now() + tokens.expires_in * 1000,
    });

    // 3. Update the users metadata, assuming future updates will be posted to the `/update-metadata` endpoint
    await updateMetadata(userId);

  } catch (e) {
    console.error(e);
  }
}

window.onload = code();
</script>

</body>
</div>