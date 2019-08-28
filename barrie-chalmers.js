;(function() {
	// create dom node
	var chatbotDOM = document.createElement('div')
	chatbotDOM.setAttribute('id', 'chalmers')
	chatbotDOM.innerHTML = `<style>
			#chalmers {
				position: fixed;
				bottom: 0;
				right: 0;
				width: 100%;
				z-index: 100;
			}

			#chalmers-logo {
				position: absolute;
				right: 20px;
				bottom: 20px;
				width: 32px;
				height: 32px;
				border: none;
				background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMTIuNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzAwMDA0NCIvPgo8cGF0aCBkPSJNMTEuNSAxMi45MjY1QzExLjUgMTQuMzg1OSAxMC4zNjM3IDE1LjUzNzcgOSAxNS41Mzc3QzcuNjM2MjcgMTUuNTM3NyA2LjUgMTQuMzg1OSA2LjUgMTIuOTI2NUM2LjUgMTEuNDY3MiA3LjYzNjI3IDEwLjMxNTQgOSAxMC4zMTU0QzEwLjM2MzcgMTAuMzE1NCAxMS41IDExLjQ2NzIgMTEuNSAxMi45MjY1WiIgc3Ryb2tlPSIjMDAwMDQ0Ii8+CjxwYXRoIGQ9Ik0xOS41IDEyLjkyNjFDMTkuNSAxNC4zODU0IDE4LjM2MzcgMTUuNTM3MiAxNyAxNS41MzcyQzE1LjYzNjMgMTUuNTM3MiAxNC41IDE0LjM4NTQgMTQuNSAxMi45MjYxQzE0LjUgMTEuNDY2NyAxNS42MzYzIDEwLjMxNDkgMTcgMTAuMzE0OUMxOC4zNjM3IDEwLjMxNDkgMTkuNSAxMS40NjY3IDE5LjUgMTIuOTI2MVoiIHN0cm9rZT0iIzAwMDA0NCIvPgo8L3N2Zz4K');
				background-size: 32px 32px;
				border-radius: 50%;
				box-shadow: 0 0 6px 0 rgba(116, 116, 116, 0.51);
				transition: transform 0.3s;
			}
			#chalmers-logo:hover {
				cursor: pointer;
				transform: scale(1.5);
			}
			#chalmers-logo .chalmers-label {
				font-size: 0;
				height: 1px;
				overflow: hidden;
				display: block;
			}

			/* panel layout mechanics */
			#chalmers .chalmers-panel-wrap {
				position: fixed;
				bottom: 70px;
				right: 20px;
				width: 23em;
				max-width: calc(100vw - 40px);
				transform: translateX(110%);
				transition: 0.3s ease-out;
				border-radius: 12px;
				overflow: hidden;
			}
			#chalmers .chalmers-panel {
				height: 500px;
				color: #eee;
			}

			#chalmers [type="button"] ~ .chalmers-panel-wrap {
				transform: translateX(0%);
			}

			#chalmers iframe {
				box-shadow: 0px 0px 6px rgba(0,0,0,0.5);
				border: 0;
				height: 100%;
				width: 100%;
			}
	</style>
  <button id="chalmers-logo" type="" title="Activate chatbot" onclick="var x=document.getElementById('chalmers-logo');x.type === 'button' ? x.type='':x.type ='button';">
    <span class="chalmers-label">Activate chatbot</span>
  </button>

  <div class="chalmers-panel-wrap">
    <div class="chalmers-panel">
      <iframe src="https://barrie.chalmers.app/"></iframe>
    </div>
  </div>`
	document.body.append(chatbotDOM)
})()
