<template>
  <input-box @form-submit="handleSubmit" :fields="fields">
    <template #header>
      <h1>Login</h1>
      <p class="py-1 text-sm">
        To register a new account
        <router-link to="/register" class="text-sm ">Click Here</router-link>
      </p>
      <p v-if="signInError">Incorrect Email/Password</p>
    </template>
  </input-box>
</template>

<script lang="ts">
import InputBox, { Field } from "@/components/InputBox.vue";
import { useUser } from "@/composables/useUser";
import { useQuery } from "@vue/apollo-composable";
import { defineComponent, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { verifyPasswordQuery } from "@/graphql/queries/verifyPassword";

export default defineComponent({
  components: { InputBox },
  setup() {
    const { user, setUser } = useUser();
    const { push } = useRouter();

    const queryPayload = reactive({ email: "", password: "" });
    const { result } = useQuery(verifyPasswordQuery, queryPayload);

    const signInError = ref<boolean>(false);
    const hasSubmitted = ref<boolean>(false);

    // password verification complete
    watch(result, () => {
      const id = result.value.user[0]?.id;
      if (id) setUser(id);
      else if (hasSubmitted.value) {
        signInError.value = true;
      }
    });

    // successfully logged in
    watch(user, () => {
      if (user.value?.id) push("/");
    });

    const handleSubmit = (payload: { email: string; password: string }) => {
      hasSubmitted.value = true;
      queryPayload.email = payload.email;
      queryPayload.password = payload.password;
    };

    const fields: Field[] = [
      { name: "email", type: "email" },
      { name: "password", type: "password" }
    ];

    return { handleSubmit, fields, signInError };
  }
});
</script>
