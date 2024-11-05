<!-- resources/views/prediksi.blade.php -->
@extends('home')

@section('content')
    <!-- Konten Berdasarkan Nilai -->
    @if($pasaran == 'czech')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAUS-6bKNWad0gL7DhIS_zBoSWa6fKti-iQ&s">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak1'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d1']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d1']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu1'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua1'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan1'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar1'] }}">
</div>

        
    @elseif($pasaran == 'pololotto')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://www.pololotto.com/images/logo.png">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak2'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d2']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d2']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu2'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua2'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan2'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar2'] }}"> 
</div>
    @elseif($pasaran == 'hk-siang')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://lh3.googleusercontent.com/proxy/_Db25nB2Xqlu_pC7q-IYL_BG8qg3BKHry0JwwnVeFFlF_EPhCLkMh1ZFYlYXFO5KT7c63NZGb7CcxvohYuXziXyBigdJdF-8dGRXFQo3mV9Y3BIKjFnn6JBAW_4IZ_NbgFeE">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak3'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d3']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d3']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu3'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua3'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan3'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar3'] }}">
</div>
    @elseif($pasaran == 'sydneylotto')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://fernandezchitilibros.com.ar/assets/sydney-lotto.webp">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak4'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d4']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d4']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu4'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua4'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan4'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar4'] }}"> 
</div>
    @elseif($pasaran == 'macatutoto')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvZaWLzlT1jyy4GHXfNHscKroc7SRdrLdkA&s">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak5'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d5']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d5']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu5'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua5'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan5'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar4'] }}"> 
</div>
    @elseif($pasaran == 'yordania')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://i0.wp.com/bintangsave.id/wp-content/uploads/2024/05/Togel-Yordania-Memecahkan-Jackpot-Terbesar-Di-Pasaran-Togel-Online.webp?fit=700%2C350&ssl=1">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak6'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d6']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d6']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu6'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua6'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan6'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar6'] }}"> 
</div>
    @elseif($pasaran == 'irlandia')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Flag-map_of_Ireland.svg">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak7'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d7']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d7']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu7'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua7'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan7'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar7'] }}"> 
</div>
    @elseif($pasaran == 'jimbaran')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZq1jiWEq3Yb3rkKmz_fQWzzr5LGf290irfA&s">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak8'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d8']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d8']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu8'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua8'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan8'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar8'] }}">
</div>
    @elseif($pasaran == 'singapore')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://seeklogo.com/images/S/singapore_Pools-logo-A70D962390-seeklogo.com.png">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak9'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d9']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d9']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu9'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua9'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan9'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar9'] }}"> 
</div>
    @elseif($pasaran == 'penang')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://seeklogo.com/images/P/penang-fc-logo-3175F067A4-seeklogo.com.png">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak10'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d10']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d10']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu10'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua10'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan10'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar10'] }}">
</div>
    @elseif($pasaran == 'malaysia')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3eJjHJfj5xN1yWFZfI3wcQ0lpYji6Zkkhg&s">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak11'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d11']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d11']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu11'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua11'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan11'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar11'] }}"> 
</div>
    @elseif($pasaran == 'indonesiatoto')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sSm-pRiphWVEsvsaZzxGtjMO9g9_1qhETw&s">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak12'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d12']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d12']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu12'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua12'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan12'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar12'] }}">
</div>
    @elseif($pasaran == 'moskow')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://seeklogo.com/images/M/Moscow-logo-4720093528-seeklogo.com.png">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak13'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d13']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d13']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu13'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua13'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan13'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar13'] }}">
</div>
    @elseif($pasaran == 'hongkonglotto')
    <hr>
    <button type="button" onclick="history.back();" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i> Beranda Prediksi</button>
           
            <h3 class="text-center text-uppercase">PREDIKSI HARI INI {{ $tanggal }} </h3>
                        <hr class="w-75 d-block mx-auto">
                        <div class="text-center wrap-pred">
                        <img class="img-fluid rounded my-3" width="120px " height="120px" src="https://hongkonglotto.com/assets/images/hongkong-lotto-2.png">
                            <h5>✅ ANGKA MAIN:</h5>
                            <h4 class="text-warning">(4 Digit): {{ $variables['acak14'] }}</h4>
                            <h5 class="my-2">TOP 3D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $threeDigitVariables['3d14']) }}</h4>
                            <h5 class="my-2">TOP 2D (BB) :</h5>
                            <h4 class="text-warning">{{ implode('*', $twoDigitVariables['2d14']) }}</h4>


                            <h5 class="mt-4">COLOK BEBAS :</h5>
                            <h4 class="text-warning">{{ $singleDigitVariables['satu14'] }}</h4>
                            <h5 class="my-2">COLOK 2D :</h5>
                            <h4 class="text-warning">{{ $doubleDigitVariables['dua14'] }}</h4>

                            <h5 class="my-2">SHIO JITU :</h5>
                            <h4 class="text-warning">{{ $nmhewan['hewan14'] }}</h4>
                            <img class="img-fluid" src="{{ $fthewan['gambar14'] }}">
</div>
    @else
        <p>Konten default untuk pasaran lainnya.</p>
    @endif
@endsection
