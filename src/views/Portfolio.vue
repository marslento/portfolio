<template>
  <div id="info" class="p-page min-h-screen py-16 flex md:flex-row flex-col items-center justify-center  pb-sm bg-gray-200 transition duration-500" >
    <div class="md:w-5/12 w-full flex flex-col justify-center">
      <div class="w-full px-3">
        <p ref="intro1" class="px-1">Hi, My name is <b>Marcia</b>.</p>
        <p ref="intro2" class="px-1">A front-end developer base in Taipei.</p>
        <div class="contact" ref="intro3">
          <p class="pt-8"> － </p>
          <p>
            <a class="hover:bg-gray-300 px-2" href="https://github.com/marslento" target="_blank">GitHub</a>
            <span> ,</span>
            <a class="hover:bg-gray-300 px-2" href="https://bitbucket.org/%7B53e38abc-a6ea-4f72-8142-4f89620d3b30%7D/" target="_blank">Bitbucket</a>
            <span> ,</span>
            <a class="hover:bg-gray-300 px-2" href="https://www.linkedin.com/in/yuts-wu-81103613b/" target="_blank">LinkedIn</a>
          </p>
        </div>
      </div>
      <div class="w-full pt-8 px-3">
        <div class="px-1 py-2 border-b-2 text-center"> {{$t(`work`)}} </div>
        <div
          v-for="i in 3"
          :key="i"
          class="note rounded flex flex-row hover:bg-gray-100 p-2"
          @click="openNote(i)"
          >
          <div class="title w-5/12 text-sm text-gray-900 ">{{$t(`work${i}.time`)}}</div>
          <div class="content w-7/12">
            <span>{{$t(`work${i}.title`)}}</span>
            <br/>
            <span class="text-gray-600 text-sm"> {{$t(`work${i}.subTitle`)}}</span>
            <div v-html="$t(`work${i}.describe`)" :class="['note-detail pt-2 text-gray-800 ', { open: work === i}]" >
            </div>
          </div>
        </div>
      </div>
      </div>
    <div class="md:w-5/12 w-full flex flex-col justify-center">
      <div class="w-full pt-8 px-3">
        <div class="px-1 py-2 border-b-2 text-center"> {{$t('edu.edu')}} </div>
        <div
          class="note rounded flex flex-row p-2"
          >
          <div class="title w-5/12 text-sm text-gray-900 ">{{$t(`edu.time`)}}</div>
          <div class="content w-7/12">
            <span>{{$t(`edu.title`)}}</span>
            <br/>
            <span class="text-gray-600 text-sm"> {{$t(`edu.subTitle`)}}</span>
          </div>
        </div>
      </div>
      <div class="w-full pt-8 px-3">
        <div class="px-1 py-2 border-b-2 text-center"> {{$t('skill.skill')}} </div>
        <div class="note rounded flex flex-row p-2">
          <div class="content  px-3">
            <span class="" v-html="$t(`skill.describe`)"> </span>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
// import Follower from '@/components/Follower.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'Portfolio',
  components: {
    // Follower,
  },
  data() {
    return {
      work: ''
    }
  },
  computed: {
    ...mapGetters({
      step: 'info/step'
    }),
    infoStyle() {
      if (this.step === 0) {
        return ''
      }
      return 'intro-me-up'
    }
  },
  methods: {
    openNote(key) {
      this.work = key
    }
  }
}
</script>
<style lang="scss">
  .note-detail {
    height: 0;
    min-height: 0;
    overflow: hidden;
    transition: .6s cubic-bezier(0.075, 0.82, 0.165, 1);
    &.open {
      height: auto;
    }
  }
</style>
