import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
	key: "contacts",
	storage,
};

const persistedContactsReducer = persistReducer(
	contactsPersistConfig,
	contactsReducer
);

export const store = configureStore({
	reducer: {
		contacts: persistedContactsReducer,
		filters: filtersReducer,
	},
});

export const persistor = persistStore(store);
