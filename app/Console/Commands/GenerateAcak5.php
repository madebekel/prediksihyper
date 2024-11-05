<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class GenerateAcak5 extends Command
{
    protected $signature = 'random:acak5';
    protected $description = 'Generate random number for acak5';

    public function handle()
    {
        Log::info("GenerateAcak2 dijalankan pada waktu: " . Carbon::now()->format('H:i'));

        $jsonPath = storage_path('random_numbers.json');
        $data = File::exists($jsonPath) ? json_decode(File::get($jsonPath), true) : [];

        // Generate nilai acak untuk acak1
        $acak5 = '';
        for ($i = 0; $i < 4; $i++) {
            $acak5 .= rand(0, 9);
        }
        $data['variables']['acak5'] = $acak5;

        // Ambil 3 dan 2 angka terakhir
        $lastThreeDigits = substr($acak5, -3);
        $lastTwoDigits = substr($acak5, -2);

        // Dapatkan kombinasi unik
        $data['3d_variables']['3d5'] = $this->getUniqueCombinations($lastThreeDigits, 6);
        $data['2d_variables']['2d5'] = $this->getUniqueCombinations($lastTwoDigits, 2);

        // Tambahkan angka acak untuk $satu dan $dua dengan format yang diinginkan
        $data['single_digit_variables']['satu5'] = rand(0, 9) . '/' . rand(0, 9); // Format "x/y"
        $data['double_digit_variables']['dua5'] = str_pad(rand(0, 99), 2, '0', STR_PAD_LEFT) . '/' . str_pad(rand(0, 99), 2, '0', STR_PAD_LEFT); // Format "xx/yy"
                
        // Seleksi berdasarkan dua angka terakhir
        $this->selectAnimal($lastTwoDigits, $data['nmhewan'], $data['fthewan'], 5);

        // Menyimpan data ke file JSON
        File::put($jsonPath, json_encode($data));
        Log::info("Data acak1 telah disimpan ke file JSON.");
    }

    private function getUniqueCombinations($digits, $count)
    {
        $combinations = [];
        $shuffledDigits = str_split($digits);
        $permutations = $this->getPermutations($shuffledDigits);

        // Ambil kombinasi unik hingga jumlah yang diinginkan
        $uniqueCombinations = array_unique($permutations);
        return array_slice($uniqueCombinations, 0, $count);
    }

    private function getPermutations(array $items, $perms = [])
    {
        if (empty($items)) {
            return [implode('', $perms)];
        }

        $result = [];
        for ($i = 0; $i < count($items); $i++) {
            $newItems = $items;
            $newPerms = $perms;
            $newPerms[] = $newItems[$i];
            unset($newItems[$i]);
            $result = array_merge($result, $this->getPermutations(array_values($newItems), $newPerms));
        }

        return $result;
    }

    private function selectAnimal($lastTwoDigits, &$nmhewan, &$fthewan, $index)
    {
        if (strpos($lastTwoDigits, '1') !== false) {
        $nmhewan['hewan' . $index] = 'Tikus'; // Misalnya, jika ada angka 1, kita pilih Singa
        $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5i3ndwttq2SWatqsmq4n51zd1gQHC6g5iEmmLb2QnJy1YdUJHtZQCEVNB0zIN-CGIf9CGAEI6TCK1Ml2intl52-VEHaDSf8ZmPAeFz3RcL9DkUpSxCebdNK6A81pDUmHGQDRw4njEYk62aTLdDarcW8M0FbUPzAtXjqL7gES_79WWLHXT33bU3J5mkoe4/s50/kus-removebg-preview%20(1).png'; 
        }elseif (strpos($lastTwoDigits, '2') !== false) {
            $nmhewan['hewan' . $index] = 'Babi'; // Jika ada angka 2, kita tetap pilih Singa
            $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnrkpyzoQzcYmgwy5wzdjIohbGtsDnWJheo1MvzMeciZOStuf1m2Hc8A6JgZD-rzPPVmDC_a9lLpiGAW5JWbrV6A33g-8_WYO6XN4GOnGyVihVZXb6EF6RDjHWWlfLT1226k6P3ucwGSYP2dTdFow799o2mi-vyYYQM8HIl0IXnj847e5yw9yDVbTT5BNk/s50/babi-removebg-preview%20(1).png'; 
        }elseif (strpos($lastTwoDigits, '3') !== false) {
            $nmhewan['hewan' . $index] = 'Anjing'; // Jika ada angka 2, kita tetap pilih Singa
            $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDuzLMZo_s7UsIVOf0mbfbTreZM8yb_nhtiYvFW9c8FcqV5k6Edefoj_C4rjyV__J8l_CiQPyyzpv_q6fX-U7W-AJ1C42Xk6CD8vEH16fLyMd71_wSVsJleaP0-JbQuS9JboRxX0eCuFhPDCyG0FMeLv16p6jajo7SYI1YCKrRijrJFHiA155yoymqOrn0/s50/anjing-removebg-preview%20(1).png'; // Gambar Singa
        }elseif (strpos($lastTwoDigits, '4') !== false) {
            $nmhewan['hewan' . $index] = 'Ayam'; // Jika ada angka 2, kita tetap pilih Singa
            $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOw3TNvDV7z_2v85Y_VBk7AoDlcGinA9tzYt64gYyk8ZVzEn0urtgExoEKhoRYaIWNUYUdKH4GMAWheGkLj3mxdbBBYssamKrNtbPGF3wm8QFk7uqQm9rV79zcF34lJ5Q4iaMjUynseBTUBO8EAGIgjcEvCNvmSv8Bg8K5FkVZBemXAnw4wDjkkAWJUttW/s50/ayam-removebg-preview%20(1).png'; // Gambar Singa
        }elseif (strpos($lastTwoDigits, '5') !== false) {
            $nmhewan['hewan' . $index] = 'Kambing'; // Jika ada angka 2, kita tetap pilih Singa
            $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbvDyH6aQRvZCSVS0-ftayPIB2GptF_nsVZdD8mFGePVE-9x-KIV-1PGoQijvXbFyCzg1-drclECkg8dr7Fy5XT1r5iiOswFvrwGyU_TmDrzu_yKw-OWloR0L719NQPtoiHMvCOFZ0lYNKRxhLzPjb0yucQdHEZ5o_d0Fn8_uy76REuiqztWoive-Dot7B/s50/kambing-removebg-preview%20(1).png'; // Gambar Singa
        }elseif (strpos($lastTwoDigits, '6') !== false) {
            $nmhewan['hewan' . $index] = 'Kuda'; // Jika ada angka 2, kita tetap pilih Singa
            $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmKBpCZyNJREBjunoxFKvkR9zRkUDbBR2nA3GzzJe7BZNglSTfUpCMOIIzM4vVu7Ilokdkc3vTVxa0qgor0iLzyWuBcwtzuKHaJJDjFay2obuVZ7Armr9POgzKy2suQzJvTzBnxfdk3KZtWLL_9kWP39o_sQwFM5kFadKTAoz1qlSN7d-JeP6hQmh1FWrY/s50/kuda-removebg-preview%20(1).png'; // Gambar Singa
        }elseif (strpos($lastTwoDigits, '7') !== false) {
            $nmhewan['hewan' . $index] = 'Ular'; // Jika ada angka 2, kita tetap pilih Singa
            $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2QOkOxIuvrAQ9UBMSiN7_KWZOblFwg5_2JHEjGpKn0oJXqHE2bMP3Bs7q0xpWlcfIL4Yis11iAQ0uUOg2N0_ayPz5exE6djDjNFEw0CedfwhS2TUyfjuDUWtRPFXfrOsCASBY5IeJSDuq7PqA_ecl3zYEGjn_tOyoF354NZ6b8ohSalruw3z-flmRzoV3/s50/ular-removebg-preview%20(1).png'; // Gambar Singa
        }elseif (strpos($lastTwoDigits, '8') !== false) {
            $nmhewan['hewan' . $index] = 'Naga'; // Jika ada angka 2, kita tetap pilih Singa
            $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1QY6vfq0s47zjxL-i3dlTDKpmlaHisrgsrbQfewhjVlzeyVDYDDVwCJ-C4PgWvExdHxIP4zBVhut-ei9a9PUA7Scpg_SjO9y3gvrOKrkxFKE94nhzNHmIQhPQvTgv6bO3L_mCTKTnAwcBJvBTdZi6x0oWCwqV6JXfeEwh89MnQGHvzXqSqxj7SpaxBgne/s50/naga-removebg-preview%20(1).png'; // Gambar Singa
        }elseif (strpos($lastTwoDigits, '9') !== false) {
            $nmhewan['hewan' . $index] = 'Monyet'; // Jika ada angka 2, kita tetap pilih Singa
                $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7LTFQh2mmfNFSgNr1F8k8HYSPgWkhBp2OeBCGhmEbqFGrdazPdDrhmFf8RhRlXkdwEXTg5mxin8mWi2D6reE7CJeb1Tgqul5Dyc4fhJqi04k1FgEIgll2ktO6hf1FCYUCfwfTB_v8KKXtW6TUmDztV29sDDOJYDGgphEeQU4GQybvIXIAwo6oZO8sdb1j/s50/6291.png_860-removebg-preview%20(1).png'; // Gambar Singa
        }else{
        switch ($lastTwoDigits) {
            case '12':
                $nmhewan['hewan' . $index] = 'Kerbau';
                $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5DgW_eS8eybfpnN0Pzz8t8uMkcnWy-PfxL8_myN8g_DFpDg42-_yORbyMIjjHz32DT5ADuX71i39LZ9nbMFEmrdmPsyPi8_Whws6XI6CbKRuxo1iRQi9x_ERKYKAcWEtKX9vqMBT_bXte2YrFVeBVGM9qufFXzsMbU22JZu4JCg0U92_Ts3_sBr4apKiw/s50/kerbau-removebg-preview%20(1).png';
                break;
            case '11':
                $nmhewan['hewan' . $index] = 'Harimau';
                $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaOzboT9pz7A6DBZlr3uVH3zgbsCIRqkSczLkMxeylS7EmGYbo8Ivmv3WoaO8RXqqHKTp6YczMKGzQ06QopUUI-mROZ952ZZ4jxCdfbQgJN9Z3hChY63XE4oZ73Ysyjg-YR97CLYDzrrh6fO8yorVylllg5gMc2zIHJ1i6fuqZ1B-KzzRGuMH5cbjjUtI3/s50/harimau-removebg-preview%20(1).png';
                break;
            case '10':
                $nmhewan['hewan' . $index] = 'Kelinci';
                $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdVB1MQvpXsd35JgSGl-rcHjtiliboiYnjmaEVVzcSkTdtmsdhSlANRntDs_bRSPin8ms-nCyBJu92brw4VBDGNehMNJBY19_K3QUKXQ1sYc8H_0bWfaxpaUh1aNdBUOrrBRtrAGCkDVqjiEFLARf9ocfr2ydjgXKozvdga6qDOvSGIrKO-6QbXLM_03da/s50/kelinci-removebg-preview%20(1).png';
                break;
            default:
                $nmhewan['hewan' . $index] = 'Tikus';
                $fthewan['gambar' . $index] = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5i3ndwttq2SWatqsmq4n51zd1gQHC6g5iEmmLb2QnJy1YdUJHtZQCEVNB0zIN-CGIf9CGAEI6TCK1Ml2intl52-VEHaDSf8ZmPAeFz3RcL9DkUpSxCebdNK6A81pDUmHGQDRw4njEYk62aTLdDarcW8M0FbUPzAtXjqL7gES_79WWLHXT33bU3J5mkoe4/s50/kus-removebg-preview%20(1).png';
                break;
        }
    }
    }
}
