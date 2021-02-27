import { watch } from "vue";
import { useRouter } from "vue-router";
import { useUser } from "./useUser";

export function useRedirect(shouldBeAutheticated: boolean) {
  const { user, error } = useUser();
  const { push } = useRouter();

  watch(user, () => {
    // logged in
    if (shouldBeAutheticated && !user.value) {
      push("/login");
    } else if (!shouldBeAutheticated && user.value) {
      push("/");
    }
  });
}
