/*
useReducer mujhe useState se zyada clear aur easy kyun laga

Normally jab hum useState ka use karte hain, to multiple input fields ke liye
hume multiple alag-alag states banani padti hain.
Jaise 5 fields ke liye 5 alag useState hooks.
Ye approach simple cases me theek hoti hai, lekin jaise-jaise form
ya logic bada hota jata hai, code complex aur manage karna mushkil ho jata hai.

Jab maine useReducer use kiya, to maine notice kiya ki unhi 5 alag-alag states
ki jagah ek single state object hota hai, jisme 5 alag-alag properties hoti hain.
Ye ek object sabhi related data ko ek hi jagah store karta hai.

Is object ke kisi bhi property ka data update hota hai,
to component re-render hota hai aur wahi update UI me reflect ho jata hai.
Data ko access karna bhi kaafi simple ho jata hai,
jaise state.name, state.email आदि।

Simple shabdon me kaha jaye to,
useReducer me ek hi object ka khel hota hai —
wahi ek object multiple states ka data store karta hai,
manage karta hai aur UI ko update karta hai.

Isi wajah se mujhe useReducer zyada structured,
readable aur easy laga.

Single Source of Truth

useReducer me hum ek hi state object ke saath kaam karte hain,
jisse application ka data ek hi jagah se control hota hai.
Industry me is approach ko Single Source of Truth kaha jata hai.
Isse state ka flow clear hota hai aur code ko samajhna
aur debug karna aasan ho jata hai.

Re-render aur predictability

Chahe hum useState use karein ya useReducer,
React har state update par component ko ek hi baar re-render karta hai.
Asli difference performance ka nahi,
balki structure aur control ka hota hai.

useReducer me state update ka pura logic
reducer function ke andar centralized hota hai.
Isse logic predictable hota hai,
bugs kam hote hain aur complex state ko
samajhna kaafi easy ho jata hai.

Conclusion

useReducer me hum multiple related states ko
ek single state object ke andar store karte hain.
Isse code zyada readable hota hai,
state update logic ek jagah hota hai
aur large forms ya complex state management me
maintainability kaafi improve ho jati hai.

Jabki useState simple aur chhote use-cases ke liye best hai,
complex scenarios me useReducer
ek zyada scalable aur organized solution provide karta hai.
*/

/*
Why useReducer feels easier and more structured than useState

Normally, when we use useState,
we need to create multiple separate states for multiple fields.
For example, handling five form fields usually requires
five different useState hooks.

This approach works fine for small and simple cases,
but as the form or logic grows,
the code becomes harder to manage and understand.

When I used useReducer,
I noticed that instead of creating five separate states,
we work with a single state object that contains
multiple properties for each field.

This single object stores all related data in one place.

Whenever any property of this object is updated,
the component re-renders and the updated data
is immediately reflected in the UI.

Accessing the data also becomes very simple,
using expressions like state.name, state.email, and so on.

In simple terms,
useReducer is all about working with one single object.
That object stores, manages,
and updates the data that would otherwise be spread
across multiple states.

This is the main reason why useReducer feels
more structured, readable, and easier to manage.

Single Source of Truth

Working with a single state object means
the application data is controlled from one place.
In the industry, this approach is known as
Single Source of Truth.

This makes the state flow clear
and makes the code easier to understand and debug.

Re-rendering and predictability

Whether we use useState or useReducer,
React re-renders the component once per state update.
The real difference is not performance,
but structure and control.

With useReducer,
all state update logic is centralized
inside the reducer function.
This makes the logic more predictable,
reduces bugs,
and makes complex state easier to understand.

Conclusion

With useReducer,
multiple related states are stored
inside a single state object.

This centralizes the state update logic,
improves readability,
and makes the code easier to maintain and scale.

While useState is perfect
for simple and small use cases,
useReducer provides a more scalable
and organized solution for complex state management.
*/

import React, { useReducer } from 'react';

// Initial state
const initialState = {
  name: '',
  email: '',
  age: '',
  password: '',
  confirmPassword: '',
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

const UserProfileFormUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('useReducer component render');

  return (
    <div>
      <h1>User Profile Form (useReducer)</h1>

      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })
        }
      />

      <input
        placeholder="Age"
        value={state.age}
        onChange={(e) =>
          dispatch({ type: 'SET_FIELD', field: 'age', value: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: 'SET_FIELD',
            field: 'password',
            value: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={state.confirmPassword}
        onChange={(e) =>
          dispatch({
            type: 'SET_FIELD',
            field: 'confirmPassword',
            value: e.target.value,
          })
        }
      />

      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
};

export default UserProfileFormUseReducer;