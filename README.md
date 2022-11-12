# ToolBox
## BackEnd Technical Test

This is a solution for the Back-end part of the test

## GET Files Data

1.  **Installation**

    First, we need to clone the project
    
    ```sh
    # Cloning this repo into your sytem
    git clone https://github.com/Arcturus91/toolboxTest-backend
    ```
    
    Second, we have to install dependencies
    
    ```sh
    # In the project´s file, do:
    npm i
    ```
    
2. **Runing the project**

    Once dependencies have been installed, run the server:

    ```sh
    # Starting up server
    npm run dev
    ```
    
    Project is configured to run on Port 5005. Either run the server on the browser or make the API calls as explained in the next sections.
    
3. **End points**

    You can make get calls to the following routes:

    3.1. Get files data
    
    ```sh
    # First Endpoint: Get /files/data
    http://localhost:5005/api/files/data
    ```
    [![BackEnd|](https://res.cloudinary.com/dad5dandd/image/upload/v1668245219/ToolBox/Screen_Shot_2022-11-12_at_04.26.10_kejyrh.png)]()
    
    3.2. Get files list
    
    ```sh
    # Bonus Endpoint: Get /files/list
    http://localhost:5005/api/files/list
    ```
    
    [![BackEnd|](https://res.cloudinary.com/dad5dandd/image/upload/v1668245219/ToolBox/Screen_Shot_2022-11-12_at_04.26.17_jpypuu.png)]()
    
    3.3 Get files data + query params
    
    ```sh
    # Bonus Endpoint: Get /files/data?fileName=<Name of the File>
    http://localhost:5005/api/files/data?fileName=<Name of the File>
    ```
    
[![BackEnd|](https://res.cloudinary.com/dad5dandd/image/upload/v1668245219/ToolBox/Screen_Shot_2022-11-12_at_04.26.30_qq1rhp.png)]()

4. **Testing**

    ```sh
    # Testing route Get /files/data
    npm test
    ```
