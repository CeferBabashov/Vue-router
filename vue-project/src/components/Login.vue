<template>
    <div id="sign_in">

        <div class="logo text-center">
            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="">
        </div>
        <div class="mt-3 text-center">
            <h1 style="font-weight:400" >Please sign in</h1>
        </div>
        <div class="input mt-4">
            <input class="form-control p-3" type="email" placeholder="Email address">
            <input class="form-control p-3" type="text" placeholder="Password">
        </div>
        <div class="remember pt-3 d-flex">
            <label for="inp">
                <input id="inp" type="checkbox">
                <p class="ms-1">Remember me</p>
            </label>
        </div>
        <button class="btn btn-primary">Sign in</button>
        <div class="d-flex justify-content-center">
            <span>© 2017–2021</span>
        </div>



    </div>
</template>


<script>
export default {

}
</script>

<style scoped >
#sign_in {
    width: 300px;
    margin:auto;
    margin-top: 150px;

}
.logo img {
    width: 80px
}

.remember {
    justify-content: center;
}

button {
    width: 100%;
    padding: 15px;
    margin-bottom: 40px;
}

label {
    display: flex;
    align-items: baseline
}


</style>