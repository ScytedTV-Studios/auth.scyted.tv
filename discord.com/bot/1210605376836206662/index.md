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
    <p>You are authorizing "ScytedTV Studios" with Discord.</p>
    <button onclick="redirectToDiscord()" class="discord-button"><img src="https://cdn.scyted.tv/website-assets/dashboard/discord-logo.png" alt="Discord" class="discord-icon" /> Continue with Discord</button>
</div>
<div id="error-message" style="color: red;"></div>

<script src="https://api.scyted.tv/wave-development/dashboard/page-loading-script.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF3ZTHGQHE"></script>
<script src="dashboard-script.js"></script>
<script src="error-script.js"></script>

<script>
async function code(req, res) {
    const { url, state } = discord.getOAuthUrl();

  // Store the signed state param in the user's cookies so we can verify
  // the value later. See:
  // https://discord.com/developers/docs/topics/oauth2#state-and-security
  res.cookie('clientState', state, { maxAge: 1000 * 60 * 5, signed: true });

  // Send the user to the Discord owned OAuth2 authorization endpoint
  res.redirect(url);
}

window.onload = code();
</script>

</body>
</div>