<template>
    <div class="inner">
        <div class="logo">

        </div>
        <nav>
            <ul>
                <li>
                    <a href="" class="nav-about" title="Gorilla.About">
                        <!-- <svg class="nav-icon"></svg> -->
                        <span>关于本站</span>
                    </a>
                </li>
                <li>
                    <a href="" class="nav-geek" title="Gorilla.Geek">
                        <span>极客猩球</span>
                    </a>
                </li>
                <li>
                    <a href="" class="nav-Podcast" title="Gorilla.Podcast">
                        <span>播客猩球</span>
                    </a>
                </li>
                <li>
                    <a href="" class="nav-bodybuilding" title="Gorilla.BodyBuilding">
                        <span>撸铁猩球</span>
                    </a>
                </li>
                <li>
                    <a href="" class="nav-Medium" title="Gorilla.Medium">
                        <span>媒体猩球</span>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- <div class="mobile-menu mobile-only">
            <div class="menu-section menu-login mobile-only">
                <a href="" class="btn" onclick=""></a>
            </div>
            <div class="menu-section menu-search"></div>
            <div class="menu-section menu-subscribe"></div>
            <div class="menu-section menu-follow"></div>
        </div> -->
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
*{
    --curve-out: cubic-bezier(.95,.05,.8,.04);
    --duration-out: .17s;
    --bold-weight: 700;
    --transition-out: all var(--duration-out) var(--curve-out)
}

nav{
    width: 100%;
    font-weight: var(--bold-weight);
    font-size: 1.2rem;
    margin: .5em 0 1.5em;
    display: block;
    translate: 41% 0;
    transition: var(--transition-out);
    opacity: .1;
}

.inner{
    color: var(--primary-btn-text);
    background: var(--primary-btn-bg);
    overflow: auto;
    height: 100%;
    width: 100vw;
    display: flex;
    position: relative;
    -ms-overflow-style: none;
    -moz-overflow-style: none;
    overflow-y: scroll;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem 6vw
}


</style>