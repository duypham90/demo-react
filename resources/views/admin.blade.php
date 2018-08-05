<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel 5.6 - ReactJS Example</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <script type="text/javascript">
        laravel = {!! json_encode([
                'baseUrl' => url('/'),
                'csrfToken' => csrf_token(),
            ]) !!};
    </script>
</head>
<body>
    <div id="root"></div>
    <script src="http://localhost:3333/bundle.js"></script>
</body>
</html>

