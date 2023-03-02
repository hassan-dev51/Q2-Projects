import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import * as Yup from "yup";
import { AppDispatch, RootState } from "../redux/store";

//form validation function
export const TransactionSchema = Yup.object({
  text: Yup.string().min(2).max(30).required("Please enter a transaction"),
  amount: Yup.number().required("Please enter Amount"),
});

//custom hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
