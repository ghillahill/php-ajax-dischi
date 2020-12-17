<?php include 'dischi.php' ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="php-ajax-dischi/public/app.css">
        <title></title>
    </head>
    <body>
        <header>

        </header>
        <main>
            <div class="container">
                <div class="card-container">
                    <?php foreach ($dischi as $disco){?>
                        <div class="card">
                            <img src="<?php echo $disco["poster"] ?>" alt="poster">
                            <p>Titolo: <?php echo $disco["title"] ?></p>
                            <em>Autore: <?php echo $disco["author"] ?></em>
                            <small>Anno: <?php echo $disco["year"] ?></small>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </main>
    </body>
</html>
