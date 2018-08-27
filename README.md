#ngConf2018

Work through step by step.

(1) Create a new angular project with app-routing module.
```
ng new [projectName] --routing
```

(2) Install required npm libraries

```
npm install angular-in-memory-web-api -save
npm install memo-decorator --save
npm install immutable --save
npm install @ngrx/effects
npm install @ngrx/entity
npm install @ngrx/store
npm install @ngrx/store-devtools
```

(3) Create a feature module
```
ng g m [featureModuleName] --routing
```

(4) Create interfaces for each object.
```
ng g i [interfaceName]
```

(5) Create in-memory database. 
 ```
 // path: '/services/in-memory-database/'
 ```

(6) Create services for Dao objects.
```
```

(7) NgRx Authentication
- Authentication with ngrx (ng-conf 2018 talk)
  - Actions
    - Descriptive
    - Specific
    - Cause State Change
    - Trigger side effect
  - Action Categories
    - Auth
    - Authentication API
    - Login Page
  - States
    - login state -> (interface login-state.tw)
    - auth state -> (interface auth-state)
  - Selectors
  ```JavaScript
  const selectedUser = (state: AuthState) => state.user;
  ```
  - Derivers
  ```JavaScript
  const selectIsLoggedIn = createSelector(selectAuthUser, user => !!user);
  ```
  - State Change
    - Auth State
      - Guest -> Authenticated
    - Login State
      - Pending -> Error
  - Effects
