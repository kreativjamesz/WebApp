<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link href="css/app.css" rel="stylesheet" type="text/css">

    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <h1 class="my-4">Shop Name</h1>
                    <div class="list-group">
                        <a href="#" class="list-group-item">Category 1</a>
                        <a href="#" class="list-group-item">Category 2</a>
                        <a href="#" class="list-group-item">Category 3</a>
                    </div>
                </div>
                <div id="product"></div>
            </div>
        </div>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>
