import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteUsers } from "../api/user.api";

export const useDeleteUsers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userIds: string[]) => deleteUsers(userIds),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users", "detail"],
      });
    },
    onError: (error) => {
      alert("삭제 중 오류가 발생했습니다.");
      console.error(error);
    },
  });
};
