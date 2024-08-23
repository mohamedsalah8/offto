import axios from "axios";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAxios = axios.create({
  baseURL: "https://admin.test.offto.com.kw/api/v1/",
  headers: {
    Connection: "",
    "Accept-Language": "en",
    "Accept-Location": "85",
    "Accept-Currency": "1",
    "Accept-TimeZone": "Asia/Hebron",
    "Accept-NotificationEnabled": "no",
    "Accept-PageSize": "10",
    // Authorization: "",
  },
});

export const useGetter = ({
  endPoint,
  key,
  timer,
  reFaildTime,
}: {
  endPoint: string;
  key: string;
  timer?: number;
  reFaildTime?: number;
}) =>
  useQuery({
    queryKey: [key],
    staleTime: timer || Infinity,
    retry: reFaildTime,
    queryFn: async () => {
      const req = await useAxios.get(endPoint);
      const { data } = await req.data;
      return data;
    },
  });

export const useSetter = ({
  endPoint,
  key,
  reFaildTime,
}: {
  endPoint: string;
  key: string;
  reFaildTime?: number;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [key],
    retry: reFaildTime,
    mutationFn: async (data: any) => {
      return useAxios.post(endPoint, data);
    },
    onSuccess: (res) => {
      const { data } = res;
      queryClient.invalidateQueries({ queryKey: [key] });
      return data;
    },
  });
};
