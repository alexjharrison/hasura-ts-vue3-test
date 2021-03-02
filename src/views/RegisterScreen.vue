<template>
  <input-box @form-submit="handleSubmit" :fields="fields">
    <template #header>
      <h1>Register</h1>
      <p class="py-1 text-sm">
        To log in
        <router-link to="/login" class="text-sm ">Click Here</router-link>
      </p>
      <p v-if="error">Email already taken</p>
    </template>
  </input-box>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import InputBox, { Field } from "@/components/InputBox.vue";
import { useMutation } from "@vue/apollo-composable";
import { addUserMutation, AddUserPayload } from "@/graphql/mutations/addUser";
import { useUser } from "@/composables/useUser";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { InputBox },
  setup() {
    const { mutate: addUser, error } = useMutation(addUserMutation);
    const { user, setUser } = useUser();
    const { push } = useRouter();

    const handleSubmit = async (userInfo: AddUserPayload) => {
      try {
        const newUser = await addUser(userInfo);
        setUser(newUser.data.insert_user_one.id);
        watch(user, () => {
          push("/");
        });
      } catch (e) {
        console.log(e.message);
      }
    };

    const fields: Field[] = [
      { name: "name", type: "text" },
      { name: "email", type: "email" },
      { name: "password", type: "password" }
    ];

    return { handleSubmit, fields, error };
  }
});
</script>
