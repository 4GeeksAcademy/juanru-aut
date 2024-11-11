const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        token: sessionStorage.getItem("access_token") || null,
        user: null,
      },
      actions: {
        signup: async (name, lastname, email, password, navigate) => {
          try {
            const response = await fetch("https://opulent-space-carnival-4jqjqw4pqjqqhjj6p-3001.app.github.dev/api/registration", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, lastname, email, password }),
            });
            if (response.ok) {
              navigate("/login"); 
            } else {
              console.error("Failed to register");
            }
          } catch (error) {
            console.error("An error occurred during signup", error);
          }
        },
        
        login: async (email, password, navigate) => {
          try {
            const response = await fetch("https://opulent-space-carnival-4jqjqw4pqjqqhjj6p-3001.app.github.dev/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            });
  
            if (!response.ok) {
              console.error("Login failed");
              return;
            }
  
            const data = await response.json();
            sessionStorage.setItem("access_token", data.access_token);
            setStore({ token: data.access_token });
            navigate("/menu"); 
          } catch (error) {
            console.error("An error occurred during login", error);
          }
        },
  
        logout: () => {
          sessionStorage.removeItem("access_token");
          setStore({ token: null });
        },
  
        getMessage: async () => {
          const store = getStore();
          if (store.token) {
            try {
              const response = await fetch("https://opulent-space-carnival-4jqjqw4pqjqqhjj6p-3001.app.github.dev/api/protected", {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${store.token}`,
                },
              });
              if (response.ok) {
                const data = await response.json();
                console.log("Mensaje obtenido:", data);
              } else {
                console.error("Failed to fetch protected message");
              }
            } catch (error) {
              console.error("An error occurred while fetching the message", error);
            }
          }
        },
      },
    };
  };
  
  export default getState;