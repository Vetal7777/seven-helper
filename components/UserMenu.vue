<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <div
        v-bind="props"
        class="user-menu flex cursor-pointer items-center gap-3 text-xs text-black"
      >
        <div class="user-name">
          {{ user?.name }}
        </div>
        <img
          :src="user?.photoURL"
          class="user-photo h-8 w-8 cursor-pointer rounded-full"
        />
      </div>
    </template>
    <v-list class="menu-list mt-4">
      <v-list-item
        class="menu-item cursor-pointer"
        v-for="({ title, handler }, key) in menu"
        :key="key"
      >
        <v-list-item-title class="menu-title" @click="handler">{{
          title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/store/user'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const menu = [
  {
    title: 'Exit',
    handler: userStore.signOut
  }
]
</script>

<style lang="scss" scoped>
.v-menu > .v-overlay__content > .v-list {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.menu {
  &-list {
    padding: 0;
  }
  &-title {
    font-size: 0.8rem;

    &:hover {
      color: rgb(56 189 248 / 1);
    }
  }
}

.user {
  &-photo {
    border: 1px solid transparent;
    transition: all 200ms ease;
  }

  &-name {
    transition: all 200ms ease;
  }

  &-menu:hover {
    .user-photo {
      border-color: #62baf3;
    }

    .user-name {
      transform: translateX(-5px);
    }
  }
}
</style>
