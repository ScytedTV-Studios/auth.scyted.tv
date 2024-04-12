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
        <span class="dashboard-text">Loyd's Helper</span>
    </h3>
    <p>You have successfully authorized "Loyd's Helper" with Discord. You may now close this page and go back to Discord.</p>
</div>
<div id="error-message" style="color: red;"></div>

<script src="https://api.scyted.tv/wave-development/dashboard/page-loading-script.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF3ZTHGQHE"></script>
<script src="dashboard-script.js"></script>
<script src="error-script.js"></script>

</body>
</div>