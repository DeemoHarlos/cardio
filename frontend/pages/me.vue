<template lang="pug">
  #me.text-white.p-3
    .container
      .title.my-4
        h2
          span.mr-4 My account
          nuxt-link(to="/"): button.btn.btn-primary() BACK
      .content.flex-row.my-2
        .photo.mr-2.rounded-circle
          img.photo.rounded-circle(:src="photoUrl")
          b-form-file.file-input(type="file" name="avatar" accept="image/*" @change="changePhoto")
        .basic.col
          b-input-group
            b-input-group-prepend
              b-input-group-text Display Name
            b-form-input.bg-dark.text-white(
              v-if="displayNameIsEditing"
              v-model="displayNameInput"
            )
            b-form-input.hide-input-border.text-white(
              v-else
              v-model="displayNameInput"
              :disabled="true"
            )
            b-input-group-append
              b-button.bg-primary(
                v-if="!displayNameIsEditing"
                @click="startEditDisplayName"
              ) Edit
              b-button.bg-success(
                v-else
                @click="changeDisplayName"
              ) Confirm
          b-input-group
            b-input-group-prepend
              b-input-group-text Username
              b-input-group-text.hide-input-border.text-white.pr-1 @
            b-form-input.bg-dark.text-white.pl-1(
              v-if="usernameIsEditing"
              v-model="usernameInput"
            )
            b-form-input.hide-input-border.text-white.pl-1(
              v-else
              v-model="usernameInput"
              :disabled="true"
            )
            b-input-group-append
              b-button.bg-primary(
                v-if="!usernameIsEditing"
                @click="startEditUsername"
              ) Edit
              b-button.bg-success(
                v-else
                @click="changeUsername"
              ) Confirm
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useStore,
  useContext,
  computed,
} from '@nuxtjs/composition-api'
import { StoreState } from '@/store'

import { editName, editUsername, updateProfilePhoto } from '@/routes/user'

export default defineComponent({
  setup() {
    const store = useStore() as StoreState
    const userStore = store.state.user
    const { $api, $toast, $axios, redirect } = useContext()

    const loggedIn = userStore.loggedIn
    if (!loggedIn) redirect('/')

    const refresh = ref(0)
    const photoUrl = computed(() => `${$axios.defaults.baseURL}/user/me/photo?refresh=${refresh.value}`)
    const changePhoto = async(e: Event) => {
      try {
        const files = (e.target as HTMLInputElement).files
        const file = files ? files[0] || null : null
        if (!file) throw 'No file specified.'
        if (file.size > 16 * 1024 * 1024 ) throw 'File size exceed 16MB.'
        const bodyFormData = new FormData()
        bodyFormData.append('file', file)
        await $api(updateProfilePhoto())(bodyFormData)
        refresh.value ++
        $toast.success('Successfully changed profile photo.')
      } catch (err) {
        $toast.error(err as string)
      }
    }

    const displayNameInput = ref(userStore.name || '')
    const displayNameIsEditing = ref(false)
    const startEditDisplayName = () => {
      displayNameIsEditing.value = true
    }
    const changeDisplayName = async() => {
      try {
        const user = await $api(editName())({ name: displayNameInput.value })
        store.commit('user/setUser', user)
        displayNameIsEditing.value = false
        displayNameInput.value = user.name || ''
        $toast.success('Successfully changed display name.')
      } catch (err) {
        $toast.error(err as string)
      }
    }

    const usernameInput = ref(userStore.username || '')
    const usernameIsEditing = ref(false)
    const startEditUsername = () => {
      usernameIsEditing.value = true
    }
    const changeUsername = async() => {
      try {
        const user = await $api(editUsername())({ username: usernameInput.value })
        store.commit('user/setUser', user)
        usernameIsEditing.value = false
        usernameInput.value = user.username || ''
        $toast.success('Successfully changed username.')
      } catch (err) {
        $toast.error(err as string)
      }
    }

    return {
      photoUrl,
      changePhoto,
      displayNameInput,
      displayNameIsEditing,
      startEditDisplayName,
      changeDisplayName,
      usernameInput,
      usernameIsEditing,
      startEditUsername,
      changeUsername,
    }
  },
})
</script>

<style lang="sass" scoped>
#me
  .content
    .photo
      width: 160px
      height: 160px
      position: relative
      overflow: hidden
      .file-input
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
  .hide-input-border
    background-color: transparent
    border: none
</style>

<style lang="sass">
.file-input
  &>input, &>label
    width: 100%
    height: 100%
    opacity: 0
    cursor: pointer
  &::after
    content: 'Change'
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    padding: .5em 0 1em
    text-align: center
    background-color: #000000BB
    opacity: 0
    transition: opacity 200ms
  &:hover::after
    opacity: 1
</style>
