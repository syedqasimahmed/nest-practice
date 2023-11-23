
# Migrating from Express to Nest.js 

## Breif introduction to Nest.JS

Nest.js encourages a modular structure with modules, controllers, services, and other components organized in separate directories. This modular structure makes it easier to manage larger applications.


- **Modules** 

    Nest js works on modular approach. In simple term module is small part/section/feature of application. So module contains all logic inside it. For example we have authentication module. It will contain all these files controllers , service , dto, entities and all other releted files will be inside this module folder. The modules may have other modules in it.
    [Read More](https://docs.nestjs.com/modules)

- **Controllers**

    As per docs `Controllers` are responsible for handling incoming requests and returning responses to the client. In simple terms It is just a an API route declaration.Controllers should handle HTTP requests and delegate more complex tasks to providers. 
    [Read More](https://docs.nestjs.com/controllers)

- **Providers**

    As per docs Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be injected as a depency. Providers are plain JavaScript classes that are declared as providers in a module. Service is one of the example of provider.
    [Read More](https://docs.nestjs.com/providers)




    ```javascript 
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    ```
