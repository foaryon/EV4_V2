# Download KIA EV4 Earth Hatchback (Schrägheck) images from KIA UK / KIA global CDN.
# Run from project root: .\scripts\download_ev4_hatchback_images.ps1
# See docs/BILDQUELLEN_EV4_HATCHBACK.md for URL references.
# EXPLIZIT: Nur KIA EV4 Hatchback Earth (81 kWh). Trimneutrale Discover-Assets (my26) und UK EV4-HB.

$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# Earth: Trimneutral (my26) oder bl (Base/Air-ähnlich). GTL nur wo keine Alternative (z.B. vertical-headlamps).
$pairs = @(
    # Exterior (Hatchback Earth)
    @{ Local = "img/ev4/exterior/ev4-front.jpg"; Url = "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-gtl-my26-vertical-headlamps.jpg" },
    @{ Local = "img/ev4/exterior/ev4-angle.jpg";  Url = "https://www.kia.com/content/dam/kwcms/kme/uk/en/assets/vehicles/ev4/EV4-HB_Fusion-White(1980x1114).jpg" },
    @{ Local = "img/ev4/exterior/ev4-side.jpg";  Url = "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-my26-NA-Editorial_Side_rgb-1920x1080.jpg" },
    @{ Local = "img/ev4/exterior/ev4-rear.jpg"; Url = "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-my26-NA-Beauty_34-Rear_MaleTalent_rgb-1920x1080.jpg" },
    # Interior (Hatchback Earth) – bl = Base, Earth-kompatibel
    @{ Local = "img/ev4/interior/ev4-dashboard.jpg"; Url = "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-my26-NA_Detail_InteriorDisplay_MaleTalent_rgb-1920x1080.jpg" },
    @{ Local = "img/ev4/interior/ev4-seats.jpg"; Url = "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-bl-my26-NA_Editorial_FrontSeats_rgb-1920x1080.jpg" },
    @{ Local = "img/ev4/interior/ev4-steering.jpg"; Url = "https://www.kia.com/content/dam/kwcms/kme/ie/en/assets/vehicles/EV4/1111RHD_EV4_GTL_MY26_NA_Beauty_FullDashboard_rgb.jpg" },
    @{ Local = "img/ev4/interior/ev4-console.jpg"; Url = "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-gtl-my26-wireless-charger-1920x1080.jpg" },
    # Details
    @{ Local = "img/ev4/details/ev4-detail.jpg"; Url = "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev4/my26/discover/kia-ev4-my26-NA-Detail_rgb-1920x1080.jpg" },
    # Cargo: boot.png wird manuell in img/ev4/cargo/ abgelegt (nicht per Skript)
)

# Browser headers so CDN serves full-resolution images (not thumbnails)
$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    "Accept"     = "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
}

foreach ($p in $pairs) {
    try {
        $dir = Split-Path -Parent $p.Local
        if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
        Invoke-WebRequest -Uri $p.Url -OutFile $p.Local -UseBasicParsing -TimeoutSec 45 -Headers $headers
        $size = (Get-Item $p.Local).Length / 1KB
        Write-Host "OK: $($p.Local) ($([math]::Round($size, 1)) KB)"
    } catch {
        Write-Host "FAIL: $($p.Local) - $($_.Exception.Message)"
    }
}
