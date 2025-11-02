async function generateSpeech(message, voice)
{
				var q = qs.encode({
					voice: voice.arg,
					text: text,
				});
				http.get(
					{
						host: "192.3.81.127",
						port: "7774",
						path: `/synthesize?${q}`,
					},
					(r) => {
						var buffers = [];
						r.on("data", (d) => buffers.push(d));
						r.on("end", () => res(Buffer.concat(buffers)));
						r.on("error", rej);
					}
						}, (r) => {
							return r;
						});
}
