import PY_URL
from pytube import Playlist
p = Playlist(PY_URL)

print(f'Downloading: {p.title}')

for video in p.videos:
    print(video.title)
    st = video.streams.get_highest_resolution()
    st.download('C:\M.O')