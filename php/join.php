<?php

    /**
     * This template may be used to handle ajax requests.
     *
     * Copyright (c) 2015 Plain Macaron
     */
     
    /*
         if($_SERVER["REQUEST_METHOD"] == "POST" && $_POST):
             $post = array_values($_POST);

             $email = $post[0];

             $connection = new mysqli("localhost", "your_username", "your_password", "your_database_name");

             $query = "INSERT INTO `your_mailing_list` ";
             $query .= "(";
             $query .= "    `email`";
             $query .= ") ";
             $query .= "VALUES ";
             $query .= "(";
             $query .= "    \"" . $email . "\"";
             $query .= ")";

             $result = $connection->query($query);

             if($result):
                 $message = "Thank you for joining our mailing list.";
                 $code = 0;
             else:
                 $message = "An issue was encountered; you were not able to join our mailing list.";
                 $code = 1;
             endif;

             $connection->close();

             try
             {
                 $pair = array();
 
                 header("Content-Type: application/json");

                 $pair = array(
                     "status" => $code,
                     "message" => $message
                 );

                 $output = json_encode($pair);
    
                 echo($output);
             }
             catch(Exception $e)
             {
                 die($e->get_message());
             }
         endif;

         exit();
     */

?>