import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const About = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const [login, setLogin] = useState(true)
	const handleBack = () => {
		navigate('/')
		navigate(location)
	}
	useEffect(() => {
		setTimeout(() => {
			// navigate('/users')
		}, 2000)
	}, [navigate])

	if (login === false) {
		return <Navigate to='/login' />
	}
	return (
		<Wrapper>
			<Link to='/'>Go to home!</Link>
			<button onClick={() => setLogin(false)}>Logout</button>
			<button onClick={handleBack}>Go to home!</button>
			<button onClick={() => navigate(-1)}>Go back for 1 page!</button>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint culpa illum temporibus quia quo ab quisquam
				earum impedit iusto nisi quos, vero excepturi corrupti dolore illo explicabo? Dolor, perferendis?
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aliquam corporis quidem illo facere amet
				reprehenderit autem temporibus quam. Doloremque atque recusandae optio veritatis neque ex rem esse corrupti sed.
				Omnis voluptates illum placeat odio fugit sint expedita aspernatur accusamus! At nulla ipsam magni, voluptatibus
				suscipit quae quo, ad delectus architecto, alias culpa eligendi incidunt omnis accusantium quidem nobis aperiam?
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nemo quam natus ipsum incidunt. Ex error
				consectetur autem est molestias quo facere iste, doloremque nemo quam, maxime, dolores delectus recusandae.
				Maiores nesciunt temporibus incidunt architecto asperiores corporis consequuntur repellat facere, quidem
				repudiandae blanditiis quia, molestias voluptates inventore itaque. Voluptates minus ratione autem culpa animi
				nisi corrupti veritatis consectetur accusantium distinctio. Reiciendis cum nulla, temporibus consequatur tempora
				numquam iste voluptas pariatur architecto iure molestias repudiandae, adipisci aperiam libero praesentium
				impedit dolore ad. In, at. Ratione, obcaecati. Repellendus sequi voluptatum harum eius. Aspernatur odio amet
				dignissimos aliquam nostrum temporibus, natus error voluptatem fugit unde voluptatum saepe voluptatibus qui
				adipisci cumque autem blanditiis architecto ipsa nisi vero consequuntur dolorum repellendus harum aperiam?
				Doloribus? Dolore nostrum esse eius sed rerum aliquam perferendis facere velit mollitia quasi, in odit debitis
				officia nulla. Ut distinctio nihil natus, repellat aspernatur, consequatur magnam error dolor excepturi quasi a?
				Ea sint est doloremque incidunt? Possimus assumenda ratione nam sint at consequatur sit. Hic quisquam officia
				libero harum. Ut similique eum nam odit voluptatem ad quibusdam repudiandae laborum numquam pariatur! Similique
				alias pariatur inventore? Ipsam, facere reiciendis sequi ea placeat voluptatum vitae ad quis consequuntur nisi
				dignissimos! Accusantium adipisci, earum ullam eum, fugit sunt excepturi quidem blanditiis in quos error? Minima
				ea soluta tenetur rerum placeat a voluptatum harum labore aperiam dolorem maxime tempore mollitia ducimus
				reprehenderit culpa provident alias, rem porro unde hic iure doloribus, ipsam voluptatem beatae. Corrupti.
				Sapiente fugiat maiores optio, sequi excepturi iure. Nostrum quae veniam, perferendis omnis est commodi. Aliquam
				rem minus fugit assumenda illum totam, corporis cupiditate maiores hic repudiandae nesciunt, dolorem quos sunt?
				Ullam temporibus nesciunt quaerat suscipit odit alias, repudiandae enim quia minima optio pariatur, incidunt
				debitis veniam rerum ea nulla exercitationem fugiat asperiores maxime? Earum omnis eveniet corporis inventore
				iusto commodi.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem enim qui voluptates debitis iusto vel
				mollitia placeat deserunt aliquam, minima aut ab odio repellendus alias, deleniti corrupti facere error
				incidunt. Aut quae quam quia itaque labore excepturi sint in, ab quo doloribus facilis totam magni
				exercitationem officiis, rerum velit ex omnis sed tempore autem, maxime dolore optio quisquam deleniti? Iusto!
				Quae laudantium, ad nihil in consectetur officia dolore natus nobis. Optio ut harum modi eligendi, doloribus
				consectetur saepe quos magni dolore labore tempora eaque totam animi voluptatibus numquam odit sapiente?
				Molestiae possimus repellendus illum modi aspernatur sunt quas inventore voluptatum quasi rem veniam culpa non
				perferendis voluptatem magnam blanditiis beatae atque libero fuga officiis doloribus, dolor magni? Delectus,
				deleniti corrupti! Eaque quas veritatis voluptas libero sed facilis maiores, reiciendis ad, impedit nostrum
				iusto nemo ea vero commodi ut repudiandae vitae pariatur fuga sapiente esse, nihil deleniti blanditiis nulla
				perspiciatis! Eius? Praesentium error quod pariatur quam voluptates! Ab facere atque nihil eaque. Perspiciatis
				iusto voluptas quidem! Eligendi voluptatibus vitae adipisci ipsum omnis magni totam, quo laboriosam, aliquid
				corrupti tenetur magnam assumenda! Deserunt accusamus in modi ipsam distinctio, fugiat nostrum id, quam
				repellendus aliquam perferendis ipsa maxime laborum ipsum dolorum eligendi? Consectetur atque maiores dolores
				nulla minus beatae non nobis blanditiis eos. Sed tenetur voluptate quisquam in magni, similique doloremque
				delectus ducimus, quidem dolor facilis repellat, molestiae debitis? Mollitia, saepe? Cum optio similique
				architecto iusto repellendus molestias eos id necessitatibus laborum. Pariatur! Non sint amet ea error.
				Asperiores quisquam quis quod minus cum distinctio, voluptates inventore minima natus nemo qui nisi omnis dicta
				eius magnam eaque rem saepe vero amet? Voluptate, iure! Quas commodi, distinctio, culpa iure adipisci atque
				fugiat hic ipsum debitis vel cupiditate tempore sed molestiae id dignissimos. Iure vitae natus illo quisquam,
				rem sint aperiam ab harum veritatis animi! Ipsa aliquam nemo autem veniam pariatur voluptatum officiis
				aspernatur amet perspiciatis fugiat expedita laboriosam, repellat modi sequi in impedit sed voluptatibus
				possimus minima blanditiis labore esse eveniet. Ea, consequuntur nihil? Iste beatae maiores sunt dolores odit
				perferendis enim. Porro, error enim commodi fugit expedita tenetur impedit magni, repudiandae quod ipsam
				sapiente illo atque, optio natus ut provident eaque iusto doloremque. Natus fuga accusamus, tenetur iusto
				aliquid minus sunt. Iusto sed accusamus necessitatibus facilis ab quae voluptates obcaecati recusandae explicabo
				voluptas, sapiente est tempora, neque aut numquam, culpa exercitationem non quidem. Eum quaerat assumenda
				accusamus distinctio fuga, ex quibusdam quis nisi excepturi ut ducimus! Assumenda voluptatibus, in vero aliquid
				repellendus officiis distinctio et fugiat. Earum voluptates repudiandae repellendus! Quo, quis deserunt. Impedit
				maxime quis, a tempore eius enim corporis illo facilis suscipit vitae similique, ullam cupiditate excepturi eum
				recusandae magni quae esse provident totam quia adipisci officia! Voluptas nam quasi unde! Tempore eius ullam
				repellendus cupiditate labore, in impedit soluta vitae incidunt animi totam illo aperiam? Neque blanditiis eum
				minima optio illum necessitatibus esse, accusamus, beatae quos perspiciatis consequuntur eius maxime? Fugit quos
				ipsum doloribus eius necessitatibus incidunt aspernatur at in iure temporibus. Cum cupiditate ut, enim eius
				inventore suscipit illum dolorum, quos voluptatibus quasi, deserunt earum repellendus tempore debitis et.
				Reiciendis eius numquam, aliquid beatae porro dicta amet, dolores atque voluptatem repudiandae repellendus
				deleniti cupiditate quos ipsum odio sequi modi esse eligendi non ullam? Ea tenetur eos laudantium incidunt
				maxime. Adipisci cumque architecto cum suscipit aut maiores neque quia corporis totam sunt expedita possimus,
				atque repellendus, quas ex numquam nam deserunt! Exercitationem rerum perspiciatis libero odio? Perferendis
				laborum quae quod. Deserunt, voluptatibus suscipit minus itaque illo iste fuga labore at eum culpa consectetur.
				Deleniti fugiat provident, vel atque eveniet possimus dolorum nobis odio amet consectetur veritatis illo?
				Repellat, quod inventore. Ea asperiores ipsam possimus iure! Animi cum in corrupti. Sint autem, ducimus sequi
				facilis ut repellat culpa illum, fugit dicta a iste impedit assumenda corporis? Repudiandae itaque
				necessitatibus ipsum veniam? Pariatur eum aliquid qui eveniet, soluta mollitia eos dolorem, doloremque aperiam
				iusto accusantium cumque. Culpa, possimus rerum aspernatur cum temporibus vel, voluptatem iste ab praesentium
				nesciunt reprehenderit harum distinctio enim? Hic dolore consectetur assumenda inventore, saepe neque eveniet
				impedit deserunt reiciendis! Ipsum recusandae architecto odio sunt magnam harum repudiandae temporibus
				consequuntur, dicta fugit iusto necessitatibus veritatis similique totam amet. Aliquam. Cupiditate repellendus
				minima fuga magnam quasi amet totam. Ea eum corrupti, dignissimos molestiae mollitia, id at perspiciatis ducimus
				possimus, vel nesciunt veniam a ipsa iure? Porro delectus error neque reprehenderit? Minima, quam numquam! Rerum
				ipsam obcaecati harum reprehenderit dignissimos dolorum. Expedita culpa accusamus tempora alias, sint libero
				recusandae odit error aperiam nemo ea accusantium magnam cum veniam. Magni, labore voluptate. Unde error, eaque
				delectus dolores pariatur eveniet magnam quod quibusdam ipsa tempora suscipit non deserunt velit sunt! Sint
				minus ut ipsa, natus eum ex dolorem voluptatem consectetur quo iure hic! Laboriosam ducimus tenetur quo? Nulla,
				pariatur, laudantium dolorem adipisci animi repudiandae asperiores laboriosam quaerat nisi ducimus debitis ex
				iste delectus aperiam similique sequi libero eius reprehenderit ullam atque! Doloremque, culpa? Blanditiis,
				dolorem veritatis, eos neque natus ullam suscipit quod ut magni dicta et vel? Dolorum aperiam nam non voluptas
				quisquam vitae eaque ex quam aspernatur fugit enim tempora, ullam atque. Dolor accusamus quisquam libero,
				numquam itaque a molestias. Illo qui harum laboriosam earum! Quod quos debitis, quisquam itaque temporibus,
				praesentium odit recusandae assumenda ipsa veritatis cumque molestias maxime mollitia animi! Aliquid rerum
				dolore rem voluptates voluptatibus nam quos sunt. Recusandae, quo error dolore facilis soluta, unde ipsa tempore
				quam laborum vitae non quia iure, nihil aliquam voluptatem sunt expedita. Consectetur. Ipsa eligendi vel
				repudiandae. Placeat, earum? Ullam cumque commodi sint odit facere qui tempore inventore, cupiditate perferendis
				nulla fuga. Corporis, praesentium eaque. Sunt, nihil sapiente doloribus ea ullam repellendus provident. Fugit
				cupiditate, quae, natus necessitatibus deleniti, molestiae optio culpa nam molestias quaerat voluptatibus eos
				laborum ex? Laudantium unde ratione ut inventore delectus ipsa vel incidunt velit itaque dolorem, nisi vitae.
				Molestiae unde explicabo distinctio ipsa aperiam recusandae facere pariatur excepturi quod? Cupiditate,
				inventore molestiae. Consectetur tempora excepturi tenetur rem in, ipsa pariatur dignissimos ad at nesciunt
				mollitia rerum illo ullam. Illum, cumque consectetur? Non, eveniet quo tempora quisquam dolores mollitia?
				Eveniet fuga architecto, deserunt quaerat impedit, sequi eos dicta, recusandae saepe magnam tempora numquam at
				error nemo molestiae sed fugiat! Amet nam a eum magnam voluptates, eaque labore esse nesciunt praesentium
				tenetur facilis porro. Saepe fugiat aut, culpa, velit praesentium voluptates molestiae numquam voluptatem,
				soluta cupiditate quae laudantium. Exercitationem, magnam. Repellendus aspernatur libero quos placeat
				consequuntur fugiat dignissimos nesciunt perferendis asperiores eligendi, reprehenderit molestiae velit est at
				possimus. Aliquid ut sunt architecto deleniti quisquam, adipisci officiis reiciendis quaerat vel fuga. Odio
				veniam voluptatum suscipit ratione, sed magni possimus optio ducimus amet aliquid totam maxime provident et illo
				quae est architecto iste accusantium. Ea, voluptates soluta praesentium voluptate accusantium beatae inventore.
				Repellendus nobis quidem autem velit aut? Explicabo reiciendis soluta blanditiis doloribus voluptatem fugiat
				esse id non minus aperiam commodi distinctio nemo, cumque consectetur! Suscipit sequi assumenda cupiditate
				architecto. Nemo, neque. Natus repellendus quis vel tempora, et doloremque nihil rem, sit fuga eius repudiandae
				placeat id praesentium soluta voluptatibus nam totam debitis! Optio libero illo repudiandae doloremque veritatis
				similique, nisi soluta! Dolor, explicabo asperiores numquam sed expedita beatae temporibus nemo, accusamus
				aliquid pariatur veniam! Dolorum nihil quae iste, dignissimos ipsum reiciendis architecto accusamus, beatae sed
				expedita deleniti, corrupti veniam dicta iure! Ea aliquam ipsa asperiores nemo error magni facilis ipsam
				temporibus, nostrum quos necessitatibus. Cum eos vero ad odit, veritatis nulla ullam ipsum porro quaerat earum
				quas maxime nihil laborum quasi! Eaque labore id cupiditate praesentium quidem aperiam ex ducimus nobis
				veritatis ad error corporis non suscipit, repudiandae culpa corrupti repellat nesciunt, obcaecati ipsum, dolor
				iusto quam reiciendis recusandae. Nam, ullam. Aperiam sapiente incidunt vel totam fugit dignissimos sit
				repudiandae excepturi corrupti consectetur blanditiis aut, velit rem tempora placeat! Error ratione laudantium
				eum, enim tempora voluptatibus voluptatum ipsa iste veritatis ut. Incidunt, minus ex totam quis tempora eaque
				omnis eius aliquid natus ea architecto molestias quod rem optio sapiente voluptas mollitia id sit modi
				voluptates. Dolorum esse itaque ab maxime ipsam. Corporis cumque possimus laudantium rem odit, impedit ex
				laborum fugit ad cum atque nemo dignissimos iste, temporibus itaque est nesciunt! Dolores saepe rerum fuga dicta
				mollitia facilis animi illo architecto. Quasi eius veniam quisquam voluptates reprehenderit, vel expedita?
				Tenetur cumque illum blanditiis possimus ratione non, est officia, molestias fuga quos velit ex qui quidem
				veniam dolor debitis consequatur nostrum. Eius. Laboriosam cupiditate, laborum, inventore quos explicabo rem
				voluptates ex vel voluptatem odio quasi nulla temporibus ullam tempora sint corporis ipsam harum dolores beatae
				odit atque! Iste ipsum iusto neque quis. Unde, mollitia. Incidunt possimus fugiat mollitia! Illum enim saepe
				nihil excepturi! Et neque in magni dolorum ipsum odit repellat corporis! Impedit consequuntur voluptate soluta
				eum sequi eius velit optio nihil! Placeat corporis ex natus, fugiat soluta repudiandae quisquam voluptate
				commodi deleniti tempore animi molestiae, voluptatum dolor possimus autem totam impedit consequatur? Rem ex
				magnam voluptatem id nisi distinctio quasi est! Aut, rem illum minus, fugit mollitia itaque cupiditate tempore
				perspiciatis dolores ducimus iure non in blanditiis ut inventore vitae deleniti esse, commodi sed incidunt!
				Dolorem fugit molestias modi ipsam incidunt? Atque harum suscipit eum facilis eveniet nam labore, quae at
				recusandae, ducimus aliquam quaerat, odio accusamus. At, est? Dolorem tenetur asperiores obcaecati minima magni,
				ab officia fugit reprehenderit porro inventore. Nihil omnis quaerat, illo ipsum fuga excepturi consequuntur,
				voluptas odit maxime temporibus exercitationem voluptates error magni nulla cumque harum labore, recusandae nisi
				consectetur sint commodi hic? Itaque voluptas beatae excepturi? Et est libero facilis doloremque ullam, laborum
				quaerat blanditiis quae aperiam sint modi dolores nihil consequuntur aliquid dicta molestias. Reprehenderit fuga
				esse alias tempore labore, sapiente accusantium voluptates sequi autem. Deleniti tenetur neque ducimus aliquam
				fugit, ratione distinctio tempora rerum iste ad accusamus quo provident debitis vero molestiae molestias.
				Eligendi ducimus maiores alias eius dignissimos! Quas alias rerum laudantium impedit. Placeat nam, minus nihil
				dolore cum quae fugiat accusamus illum nobis iure rerum soluta voluptas tempora facere quia commodi. Natus eius,
				iure fugit saepe quos dolorem provident eos in quo. Magni eveniet suscipit magnam earum, animi non rem amet
				deleniti quisquam sint eum, aspernatur iste ad fugit reprehenderit in saepe ab, exercitationem expedita minima
				nam iure. Aliquam accusamus earum facere? Voluptatibus nisi error aliquid sint ex enim harum unde odio nostrum
				maiores eveniet rem qui aliquam adipisci cumque minima sapiente ducimus, ratione ab repellendus obcaecati.
				Consequuntur laborum tempore facilis ducimus. Vel eveniet voluptas sit vero architecto quisquam officiis quas
				asperiores molestias qui, eum quia rem odit illo ullam reprehenderit minus. Debitis dignissimos assumenda totam,
				ut excepturi rerum ducimus odit quisquam. Quam neque accusamus ad perspiciatis, repudiandae alias exercitationem
				pariatur rerum et facere reprehenderit totam dolores a ipsam rem non atque beatae dignissimos. Minima, ea
				labore? Sapiente est quibusdam quos inventore. Veniam necessitatibus magnam dolorum sit vero illo voluptatem
				cumque tempora sequi ut sed, amet eum sunt molestiae quae odit perferendis alias ratione rerum porro quia iure
				incidunt beatae accusantium? Explicabo? Non sapiente alias exercitationem deleniti, saepe ducimus fugit
				voluptatibus quaerat odit delectus, consequuntur eveniet est optio dolor a, mollitia laborum quia repellat
				voluptatem repudiandae beatae dolores minus voluptates praesentium! Eius! Deserunt, tempora. Autem assumenda
				minima neque quae eius sequi possimus ipsa adipisci, incidunt, quod impedit quidem quis enim, soluta veritatis
				omnis labore illo? Voluptate nobis earum vitae delectus commodi placeat! Ipsam eum ratione illo, earum deserunt
				deleniti cupiditate consequatur dolore? Deleniti, voluptas. Ratione aperiam voluptates fuga? Numquam veniam
				obcaecati dicta, repellendus molestias labore facere modi porro vel sint aliquid voluptatum? Nemo quibusdam
				dolor esse est iure, libero modi nostrum deserunt laudantium temporibus culpa magni soluta architecto ad qui
				eius ipsam, exercitationem, saepe rem delectus accusantium vel quo. Repellendus, nesciunt dolor. Dolores amet
				quia illum alias facilis beatae quidem, itaque sequi fugit reiciendis ipsam sit tempora sapiente! Modi nobis ut,
				distinctio est veritatis, autem suscipit quisquam, accusamus fugiat quae commodi nisi? Vel vitae ea deleniti
				nobis laborum corporis in laboriosam corrupti quisquam repellendus, perferendis ipsa quam asperiores magni
				dolore exercitationem aspernatur minus, maiores dolorum rem dicta, eaque quasi officia itaque. Perferendis.
				Exercitationem vel provident ex facere delectus doloremque molestiae aut magnam quisquam eius numquam dolor
				corporis ipsa quos soluta, praesentium iste id illo in, debitis reprehenderit ullam laudantium veniam
				perferendis. Beatae? Perspiciatis assumenda fuga incidunt corrupti voluptate facere consectetur similique ea
				nostrum rerum, quae vel neque rem eius, ipsum illo iste nemo voluptatum. Velit, nostrum voluptatem minima
				placeat earum necessitatibus cumque! Consequuntur perferendis distinctio ducimus architecto, beatae, recusandae
				est odit itaque fugiat blanditiis aliquam labore obcaecati necessitatibus quibusdam voluptas totam possimus
				magni error libero et corporis quaerat eos! Qui, suscipit autem. Nemo minima, adipisci eaque dolorem dolores
				aliquam facere quas quam sunt doloribus numquam, corrupti commodi voluptates, rerum amet possimus assumenda
				dicta. Velit tenetur, sit magnam ad eius iusto libero fugit! Eaque vero iure exercitationem. Ipsum amet ad autem
				soluta optio eligendi, blanditiis dolorem ab placeat commodi recusandae repellendus similique! Voluptatem
				accusamus vel laborum alias cupiditate vero voluptatibus doloremque? Tenetur, rem. Vero voluptas, veniam fuga
				cupiditate dolor excepturi veritatis possimus at, inventore voluptates earum ratione omnis explicabo, nulla
				consequuntur quasi totam sit illum esse eum. Commodi exercitationem minima dolor molestias aperiam! Voluptatibus
				amet eaque officia dolores nulla fuga expedita eligendi similique nisi dolore itaque omnis, repellat minus
				deleniti quisquam tempore neque sequi, quo vel consectetur exercitationem, quasi modi! Facilis, nemo porro!
				Nostrum ullam magnam distinctio fugiat mollitia amet est nesciunt nemo repellendus earum quia fugit, ratione
				corrupti facere officia in molestias dolorem optio saepe consequuntur aliquid provident ipsum officiis. Rerum,
				numquam! Magni animi ipsa, ducimus recusandae hic beatae veniam quia, veritatis odit quo quaerat. Minus ad nobis
				tenetur rerum omnis rem ducimus odio facilis veritatis libero. Iusto perferendis sit nostrum dignissimos?
				Suscipit, recusandae placeat? Earum porro tenetur, doloremque eligendi iure error nisi minima reiciendis magni.
				Autem hic magni architecto minima quidem aliquid nihil ut eius cum doloribus. Sunt odit harum repudiandae.
				Voluptatem facilis mollitia at beatae accusantium. Rem nobis quae tenetur minus praesentium fugit doloribus
				voluptatum asperiores sequi sunt eum, corporis dicta architecto dolorum. Doloremque deleniti veritatis ea
				consectetur, facilis perspiciatis. Nesciunt iste possimus quod recusandae rem culpa tempore placeat quidem,
				beatae architecto commodi in esse obcaecati nemo aut nobis ullam eaque! Dolorum nemo commodi distinctio velit
				delectus adipisci! Velit, quia? Maiores ab labore tempore dolor culpa deserunt facilis, sint libero possimus
				optio! Enim, beatae accusantium. Possimus veritatis asperiores ea eveniet laboriosam qui saepe numquam iure
				doloremque dolor magnam, aliquid adipisci. Dicta distinctio dolorum, ea, facilis doloremque expedita vitae harum
				qui tempore obcaecati accusamus doloribus odio alias adipisci iure a hic quia! Fugit, nostrum voluptates dolores
				distinctio sit doloribus maiores laboriosam? Consequatur dolor ab harum beatae ducimus ratione veritatis
				eligendi voluptates vitae molestias illum quisquam quis velit, nisi nostrum quam! Ab magni, culpa placeat
				molestiae perferendis praesentium quos laudantium ea mollitia? At unde distinctio fugiat non voluptatum nesciunt
				ducimus iure, incidunt eos recusandae quia? Nisi commodi voluptates, ut eligendi a at harum laborum perspiciatis
				debitis impedit, inventore doloremque distinctio rem culpa. Fugiat pariatur commodi quibusdam laboriosam, ut
				dolorem eligendi accusamus architecto ex explicabo non numquam aut qui libero earum voluptatum, delectus iste
				saepe dignissimos eaque. Esse odio ex doloribus obcaecati excepturi! Quam repellendus commodi ducimus cum
				impedit enim ex non consequuntur amet, expedita vitae possimus architecto officia quibusdam doloribus esse
				cumque incidunt inventore voluptatibus perspiciatis eum vel maiores? Fuga, soluta unde! Eaque sint, molestias,
				deleniti sapiente eveniet odit fugit hic, delectus tempora quia esse. Blanditiis ipsum iste consectetur alias
				ullam, eos facere mollitia quod aperiam voluptatum, modi provident quisquam aliquam nemo! Quas, impedit nesciunt
				sed, laborum aliquam mollitia earum cupiditate beatae asperiores consequuntur ut? Sed pariatur perferendis a
				debitis, repellat exercitationem saepe placeat consectetur, odio eaque fugit quod amet soluta sunt. Voluptatum
				laboriosam sint cumque quaerat iste ipsum, cupiditate a! Exercitationem, nesciunt earum. Dolor, ipsa, fugiat
				mollitia ullam quam, natus minima libero tempore ipsam animi excepturi nemo! Recusandae perferendis suscipit
				iste? Ipsa accusamus enim amet eligendi, alias assumenda. Saepe veniam, fugiat velit modi veritatis repellendus
				sit, eos itaque perferendis asperiores blanditiis, nesciunt quibusdam ut adipisci voluptate voluptatem
				praesentium! Neque, atque odit! Nesciunt natus fugiat in repellendus est accusantium cumque dignissimos! Id,
				mollitia quidem. Facere inventore incidunt, qui autem eligendi ipsam nemo ex blanditiis nesciunt nulla, magnam
				enim officiis earum temporibus perferendis? Cum, enim iure! Blanditiis quas eius voluptatum quasi dignissimos
				accusantium eum, voluptas quidem velit magni tempora. Hic temporibus earum exercitationem ipsa? Excepturi
				facilis in necessitatibus exercitationem unde. Eos, perspiciatis tenetur. Quisquam voluptas ratione unde
				accusantium eaque, reprehenderit vel nesciunt sit provident sed, autem sunt? Magni accusantium tempore earum
				mollitia et obcaecati, ullam, illum deleniti officiis, delectus nostrum in dolorum veniam. Officiis, sit.
				Provident debitis a est. Ea cupiditate provident laudantium ullam odio eos, doloribus rerum culpa voluptates
				commodi distinctio dicta nihil excepturi neque tenetur optio laborum dolores perspiciatis tempora dolor.
				Suscipit natus esse quam, necessitatibus facilis cupiditate sint culpa itaque, magnam aspernatur neque non dicta
				ratione sapiente temporibus! Ratione reprehenderit et officia inventore autem placeat deleniti labore reiciendis
				debitis eveniet! Assumenda, ad. Blanditiis quia ipsa vero similique voluptatum dolorem, commodi quam animi rem?
				Totam, maxime omnis reiciendis, recusandae aspernatur, aliquam facilis itaque incidunt corrupti optio mollitia
				hic at cumque? Eum? Sed expedita veritatis culpa molestias excepturi dolor, fugit aliquam repellat molestiae
				facilis, non laborum. Porro, iure minima ratione, perferendis, incidunt cupiditate ad corrupti sequi amet rem
				error ducimus laboriosam odio. Eum ut voluptatibus quam. Nesciunt id sequi, quasi provident commodi velit
				delectus! Est iure nesciunt itaque eligendi, quibusdam aut a repellat aliquam, suscipit molestiae esse dolores
				odio laudantium eius iste? Placeat dicta, aut voluptatum, maiores nisi cupiditate natus debitis alias doloribus
				provident perferendis fugiat accusamus! Omnis sed tenetur laborum minima. Repellat ut exercitationem eveniet
				commodi fugiat modi et magni! Harum. Ea quibusdam cum cupiditate repellat quos nulla quis maiores ut. Debitis
				veritatis placeat, officiis nisi hic explicabo? Possimus ea, quis iusto veniam ullam animi. Sunt eum soluta
				dolorem harum molestias? Nobis in nulla vero corporis dolores eum sit quaerat saepe minus iusto officia modi
				error aut, odio sint delectus iure? Dicta possimus tempora quaerat perferendis in fugit officiis necessitatibus
				optio. Laboriosam sint voluptas, non quia laudantium iste voluptates quod ullam accusantium molestiae adipisci
				sunt unde cumque similique culpa in quisquam ipsum! Adipisci nesciunt omnis ex minima ipsa beatae perferendis
				est.
			</p>
		</Wrapper>
	)
}
export default About
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`
